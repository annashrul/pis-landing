import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  PrimaryButton as PrimaryButtonBase,
  SecondaryButton,
} from "components/misc/Buttons.js";
import Logo from "images/logo.png";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getBank } from "../../redux/actions/bank.action";
import { validateUsername, setStep } from "../../redux/actions/regist.action";
import Select from "react-select";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-10 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-2 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const GroupHead = tw.h5`mt-4 mb-4 font-black text-left text-sm md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col w-full px-5 mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 w-full border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
// const Select = tw.select`mt-6 first:mt-0 w-full border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
// const Textarea = styled(Input).attrs({as: "textarea"})`${tw`h-24`}`

const HelpText = tw.p`text-gray-600 text-xs italic`;
const ErrorText = tw.p`text-red-500 text-xs italic`;

const GroupInput = tw.div`relative mt-6 first:mt-0 border-b-2 flex w-full flex-wrap items-stretch mb-3`;
const IcInput = tw.div`z-10 h-full leading-snug font-normal absolute text-center absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 `;
const Inputs = tw.input`px-3 py-3 border-b-2 relative bg-white bg-white rounded text-sm border-0 outline-none focus:outline-none focus:ring w-full pl-12`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;
const SponsorButton = tw(SecondaryButton)`inline-block`;

export default ({ uid }) => {
  const textOnLeft = true;
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    localStorage.removeItem("regist");
    localStorage.setItem("regist", JSON.stringify(data));
    dispatch(setStep(1));
  };
  const bank = useSelector((state) => state.bankReducer.data_bank);
  const validateUser = useSelector((state) => state.registReducer.validate);
  const valOfUsername = watch("username", "");

  useEffect(() => {
    dispatch(getBank());
    document.title = `Registrasi Prowara!`;
    const datum = JSON.parse(localStorage.getItem("regist"));
    if (datum !== null) {
      setValue("nama", datum.nama);
      setValue("mobile_no", datum.mobile_no);
      setValue("username", datum.username);
      setValue("password", datum.password);
      setValue("password_confirm", datum.password_confirm);
      setValue("bank", datum.bank);
      setValue("acc_name", datum.acc_name);
      setValue("acc_no", datum.acc_no);
    }
  }, []);

  useEffect(() => {
    const opt = bank.map((value) => ({
      label: value.name,
      value: value.id + "|" + value.name,
    }));
    setOptions(opt);
  }, [bank]);

  useEffect(() => {
    if (validateUser !== "" && validateUser !== "Username tersedia.") {
      setError("username", {
        type: "duplicate",
        message: "Username telah dipakai, silahkan ubah untuk melanjutkan!",
      });
    } else {
      clearErrors("username");
    }
  }, [validateUser]);

  const onChangeAlphaNumericInput = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z(\-)]+$/; //this will admit letters, numbers and dashes
    if (value.match(regex) || value === "") {
      setValue("username", value);
      if (validateUser !== "" && validateUser !== "Username tersedia.")
        dispatch(validateUsername({ username: value }));
    }
  };
  const onBlurUsername = (e) => {
    const value = e.target.value;
    dispatch(validateUsername({ username: value }));
  };

  const comparePass = (e) => {
    const val = e.target.value;
    if (watch("password") !== val) {
      setError("password_confirm", {
        type: "confirm_pass",
        message: "Password Konfirmasi tidak sesuai dengan password.",
      });
    } else {
      clearErrors("password_confirm");
    }
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={Logo} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>
              Pendaftaran <span className="text-primary">PROWARA</span>.
            </Heading>
            <br />
            <hr />
            <br />
            <SponsorButton>{uid}</SponsorButton>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                {...register("nama", {
                  required: "Nama Lengkap tidak boleh kosong.",
                })}
                placeholder="Nama Lengkap"
              />
              <ErrorText>
                {errors.nama === undefined ? "" : errors.nama.message}
              </ErrorText>
              <GroupInput>
                <IcInput>+62</IcInput>
                <Inputs
                  type="text"
                  {...register("mobile_no", {
                    required: "No. Handphone tidak boleh kosong.",
                  })}
                  placeholder="No. Handphone"
                />
              </GroupInput>
              <ErrorText>
                {errors.mobile_no === undefined ? "" : errors.mobile_no.message}
              </ErrorText>
              <HelpText>
                Gunakan nomor handphone yang terhubung dengan whatsapp.
              </HelpText>
              <Input
                {...register("username", {
                  required: "Username tidak boleh kosong.",
                  minLength: {
                    value: "6",
                    message: "Password minimal 6 karakter.",
                  },
                  pattern: {
                    value: /^[0-9a-zA-Z(\-)]+$/,
                    message: "Hanya gunakan angka, huruf dan tanpa spasi!",
                  },
                })}
                value={valOfUsername}
                onChange={(e) => onChangeAlphaNumericInput(e)}
                onBlur={(e) => onBlurUsername(e)}
                placeholder="Username"
              />
              <ErrorText>
                {errors.username === undefined ? "" : errors.username.message}
              </ErrorText>

              <Input
                type="password"
                {...register("password", {
                  required: "Password tidak boleh kosong.",
                })}
                placeholder="Password"
              />
              <ErrorText>
                {errors.password === undefined ? "" : errors.password.message}
              </ErrorText>

              <Input
                type="password"
                {...register("password_confirm", {
                  required: "Password Konfirmasi tidak boleh kosong.",
                })}
                placeholder="Konfirmasi Password"
                onChange={(e) => comparePass(e)}
              />
              <ErrorText>
                {errors.password_confirm === undefined
                  ? ""
                  : errors.password_confirm.message}
              </ErrorText>

              <GroupHead>Rekening Bank</GroupHead>
              <Controller
                name={"bank"}
                control={control}
                render={({ field: { value, onChange, onBlur } }) => {
                  return (
                    <Select
                      options={options}
                      placeholder={"Pilih Bank"}
                      onBlur={onBlur}
                      onChange={(val) => onChange(val.value)}
                      value={options.find((c) => c.value === value)}
                      defaultValue={options.filter((option) =>
                        value?.includes(option.value)
                      )}
                    />
                  );
                }}
              />
              <ErrorText>
                {errors.bank === undefined ? "" : errors.bank.message}
              </ErrorText>

              <Input
                type="text"
                {...register("acc_name", {
                  required: "Atas nama tidak boleh kosong.",
                })}
                placeholder="Atas Nama"
              />
              <ErrorText>
                {errors.acc_name === undefined ? "" : errors.acc_name.message}
              </ErrorText>

              <Input
                type="text"
                {...register("acc_no", {
                  required: "No. rekening tidak boleh kosong.",
                })}
                placeholder="No. Rekening"
              />
              <ErrorText>
                {errors.acc_no === undefined ? "" : errors.acc_no.message}
              </ErrorText>

              <SubmitButton type="submit">Daftar!</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
