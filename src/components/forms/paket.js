import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase, SecondaryButton } from "components/misc/Buttons.js";
import { useForm, Controller } from "react-hook-form";
import {useDispatch,useSelector} from 'react-redux'
import {getPaket,getPayment, getAlokasi} from '../../redux/actions/bank.action'
import {goRegister, setStep} from '../../redux/actions/regist.action'
import Select from 'react-select';
import Swal from 'sweetalert2'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-10 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-2 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const GroupHead = tw.h5`mt-4 mb-4 text-lonestar text-left text-sm md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col w-full px-5 mx-auto md:mx-0`

const HelpText =tw.p`text-gray-600 text-xs italic`
const ErrorText = tw.p`text-red-500 text-xs italic`

const Table = tw.table `w-full text-sm text-left text-gray-500 dark:text-gray-400`;
const Tr = tw.tr `bg-white border-b dark:bg-gray-800 dark:border-gray-700`;
const Th = tw.th `px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap`
const Td = tw.td `px-6 py-6 text-primary`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const BackButton = tw(SecondaryButton)`inline-block mt-8`

export default ({referral}) => {
  const [options, setOptions] = useState([]);
  const [chn, setChn] = useState([]);
  const dispatch = useDispatch();
  const {
    control,
    formState: {errors},
    handleSubmit,
    watch,
  } = useForm();
  
  const onSubmit = data =>{
    const regist = JSON.parse(localStorage.getItem("regist"));

    const datum = {
        fullname: regist.nama,
        mobile_no: regist.mobile_no,
        username: regist.username,
        password: regist.password,
        sponsor: referral,
        payment_channel: data.channel,
        id_paket: (data.id_paket.split('|'))[0],
        data_bank: {
          id_bank: (regist.bank.split('|'))[0],
          acc_name: regist.acc_name,
          acc_no: regist.acc_no
        }
    }
    Swal.fire({
      title: 'Sebelum melanjutkan, pastikan data yang anda masukan benar!',
      showCancelButton: true,
      confirmButtonText: 'Lanjut!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(goRegister(datum))
      }
    })
  }
  const channel = useSelector(state => state.bankReducer.channel)
  const paket = useSelector(state => state.bankReducer.paket)
  const fee_aktivasi = useSelector(state => state.bankReducer.fee_aktivasi)
  
  useEffect(() => {
    dispatch(getPaket());
    dispatch(getPayment());
    dispatch(getAlokasi());
    document.title = `Registrasi Prowara!`;
  },[]);

  useEffect(() => {
    const opt = paket.map((value) => ({
      label: value.title+" - "+value.price,
      value: value.id + "|" +value.price
    }));
    setOptions(opt)

    const val = channel.map((value) => ({
      label: value.name,
      value: value.code
    }));
    setChn(val)
  }, [channel,paket]);

  const handleClick=(e)=>{
    e.preventDefault();
    dispatch(setStep(0))
  }

  const datum = JSON.parse(localStorage.getItem("regist"));
  return (
    <Container>
      <TwoColumn>
        <TextContent>
            <Heading>Pendaftaran <span className="text-primary">PROWARA</span>.</Heading>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                  <Tr>
                    <Th>Nama</Th>
                    <Td>:</Td>
                    <Td>{datum!==null?datum.nama : '-'}</Td>
                  </Tr>
                  <Tr>
                    <Th>No. Handphone</Th>
                    <Td>:</Td>
                    <Td> {datum!==null?datum.mobile_no : '-'}</Td>
                  </Tr>
                  <Tr>
                    <Th>Username</Th>
                    <Td>:</Td>
                    <Td> {datum!==null?datum.username : '-'}</Td>
                  </Tr>
                  <Tr>
                    <Th>Bank</Th>
                    <Td>:</Td>
                    <Td>{datum!==null?(datum.bank.split('|'))[1] : '-'}</Td>
                  </Tr>
                  <Tr>
                    <Th>Atas Nama</Th>
                    <Td>:</Td>
                    <Td>{datum!==null?datum.acc_name : '-'}</Td>
                  </Tr>
                  <Tr>
                    <Th>No. Rekening</Th>
                    <Td>:</Td>
                    <Td>{datum!==null?datum.acc_no : '-'}</Td>
                  </Tr>
              </Table>
            </div>

          </TextContent>
        <TextColumn textOnLeft={false}>
          <TextContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <GroupHead>Pilih Metode Pembayaran</GroupHead>
              <Controller
                  name={"channel"}
                  control={control}
                  rules={{ required: "Harus memilih metode pembayaran!" }}
                  render={({ field: { value, onChange, onBlur } }) => {
                    return (
                      <Select
                        options={chn}
                        placeholder={"Pilih Metode Pembayaran"}
                        onBlur={onBlur}
                        onChange={val => onChange(val.value)}
                        value={chn.find(c => c.value === value)}
                      />
                    );
                  }}
                />
              <ErrorText>{errors.channel===undefined?'':errors.channel.message}</ErrorText>

              <GroupHead>Pilih Paket Registrasi</GroupHead>
              <Controller
                  name={"id_paket"}
                  control={control}
                  rules={{ required: "Harus memilih paket registrasi!" }}
                  render={({ field: { value, onChange, onBlur } }) => {
                    return (
                      <Select
                        options={options}
                        placeholder={"Pilih Paket Registrasi"}
                        onBlur={onBlur}
                        onChange={val => onChange(val.value)}
                        value={options.find(c => c.value === value)}
                      />
                    );
                  }}
                />
              <ErrorText>{errors.id_paket===undefined?'':errors.id_paket.message}</ErrorText>
              <br/>
              <HelpText>Harga Paket: <b>{watch('id_paket')?(watch('id_paket').split("|"))[1]:0}</b></HelpText>
              <HelpText>Biaya Pendaftaran: <b>{fee_aktivasi}</b></HelpText>
              <HelpText>Total: <b>{parseInt(watch('id_paket')?(watch('id_paket').split("|"))[1]:"0")+parseInt(fee_aktivasi)}</b></HelpText>


              <BackButton onClick={(e)=>handleClick(e)}>Kembali</BackButton>
              <SubmitButton type="submit">Selanjutnya</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
