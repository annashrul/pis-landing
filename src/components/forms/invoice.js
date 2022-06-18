import React from "react";
import tw from "twin.macro";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
import Accordion from "../accordion";
import logo from "../../images/logo.png";
import { AiFillHome } from 'react-icons/ai'
import {toRp} from '../../helpers/genera'

const Container = tw.div `flex justify-center items-center md:h-screen`;
const ImageContainer = tw.div `flex justify-center items-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-start`;
const Column = tw.div`w-full md:w-2/6 bg-primary mx-1 md:mx-auto rounded-tr-lg drop-shadow-lg px-4 md:px-10 py-5 `;

const Box = tw.div `flex justify-center items-center border-dotted border-2 bg-lonestar-100/25  border-lonestar-500 py-2 mt-3 `
const Subheading = tw(SubheadingBase)`text-center text-white md:text-left pl-1 md:pl-3`;

const HomeIc = tw.div`text-white pt-1`

const P = tw.p`text-white text-sm mt-3`;
const TextMoney = tw.p `text-lonestar font-bold text-lg`;
const TextLink = tw.a`text-lonestar font-bold text-sm italic`;

const Table = tw.table `w-full`;
const Td = tw.td `w-1/2`;
const TdRight = tw.td `w-1/2 text-right`;

export default ({
  datum=[]
}) => {
  console.log("DATUM",datum.length)
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const data = datum.length ===undefined ? datum : {
    "id": "15448992-ae80-4da6-9ecd-ee90379f9d87",
    "kd_trx": "INV/XXXX",
    "id_member": "7c42934f-3185-4bf3-af85-ffbf8756eec2",
    "amount": "1850313",
    "unique_code": 313,
    "status": 1,
    "payment_slip": "-",
    "created_at": "2022-06-02T03:30:46.595Z",
    "updated_at": "2022-06-04T07:17:48.000Z",
    "payment_channel": "DIRECTBCA",
    "transaction_data": {
      "invoice_no": "INV/DP/220602/001",
      "payment_method": "DIRECTBCA",
      "payment_name": "BANK BCA",
      "amount": "180000050000",
      "admin": "0",
      "total_pay": "180000050000313",
      "kode_unik": "313",
      "pay_code": "7225266999",
      "acc_name": "PROWARA MAPAN UTAMA PT",
      "expired_date": "2022-06-02 17:30:46",
      "payment_type": 1,
      "expired_time": "24 jam",
      "instruction": [{
        "title": "Informasi Transfer",
        "steps": [
          "Pastikan jumlah yang dibayar sudah sesuai hingga Nomor Unik pada 3 (tiga) digit terakhir.",
          "Gunakan kode undefined sebelum nomor rekening untuk transfer antar bank.",
          "Untuk mempercepat verifikasi, pastikan telah upload bukti bayar",
          "Proses verifikasi akan berlangsung 1x24 jam untuk transfer sesama bank, dan 2x24 jam untuk transfer antar bank."
        ]
      }]
    }
  }
  return (
    <Container>
      <Column>
        <TwoColumn>
          <HomeIc>
            <a href="/"><AiFillHome/></a>
          </HomeIc>
          <Subheading>Invoice #{data.kd_trx}</Subheading>
        </TwoColumn>
        <ImageContainer>
          <img src={logo} width='200px' alt="Logo" />
        </ImageContainer>
        <P>
          Untuk menyelesaikan pendaftaran di PROWARA, silahkan transfer sebesar:
        </P>
        <Box>
          <TextMoney>{toRp(data.amount)}</TextMoney>
        </Box>
        <P>
          Pembayaran dapat dilakukan ke rekening berikut:<br/>
          <Table>
            <tr><Td>Metode Pembayaran</Td><TdRight>{data.transaction_data.payment_method}</TdRight></tr>
            <tr><Td>Bank</Td><TdRight>{data.transaction_data.payment_name}</TdRight></tr>
            <tr><Td>Atas Nama</Td><TdRight>{data.transaction_data.acc_name}</TdRight></tr>
            <tr><Td>No. Rekening</Td><TdRight>{data.transaction_data.pay_code}</TdRight></tr>
          </Table>
        </P>
        <P>
          Setelah transfer berhasil, silahkan tunggu konfirmasi dari admin, lalu login menggunakan akun anda di <TextLink className="text-lo" href="https://dash.prowara.id/">https://dash.prowara.id</TextLink>!
        </P>
        <br/>
        <Accordion
          section={[
            {
              title: "Rincian Transaksi",
              type:0,
              value:(
                <Table>
                  <tr><Td>Harga</Td><TdRight>{toRp(data.transaction_data.amount)}</TdRight></tr>
                  <tr><Td>Biaya Admin</Td><TdRight>{toRp(data.transaction_data.admin)}</TdRight></tr>
                  <tr><Td>Kode Unik</Td><TdRight>{toRp(data.transaction_data.kode_unik)}</TdRight></tr>
                  <tr><Td>Total Bayar</Td><TdRight>{toRp(data.transaction_data.total_pay)}</TdRight></tr>
                </Table>
              )
            },
            {
              title: "Cara Pembayaran",
              type:2,
              value:data.transaction_data.instruction
            }
          ]}
        />
      </Column>

    </Container>
  );
};
