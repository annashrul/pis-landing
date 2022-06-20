import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import Paket1 from "images/1.jpeg";
import Paket2 from "images/2.jpeg";
import Paket3 from "images/3.jpeg";
import Swal from 'sweetalert2'

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;
const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
    props.featured &&
    css`
      ${tw`bg-lonestar text-gray-100`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-gray-300`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-2xl mt-3`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;
const AlignLeft=tw.div`text-left	`

const ShowHide = tw.span `text-blue-600 text-sm cursor-pointer`

export default ({
  subheading = "Pricing",
  heading = "Flexible Plans.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "Detail"
}) => {
  const defaultPlans = [
    {
      name: "KRAKATAU SUPLEMEN (CORDY MAXX)",
      img: Paket2,
      description: `<div style="text-align: left !important;justify-content: left !important">KRAKATAU SUPLEMEN atau CORDY MAXX<br/>
      <br/>
      ( 1 Box isi 10 Sachet  )<br/>
      <br/>
      Krakatau & Cordy Maxx merupakan suplemen herbal yang tinggi kandungan anti oksidan. Sangat bermanfaat untuk kesehatan tubuh dan meningkatkan vitalitas pria. Krakatau memiliki empat kandungan bahan alami. <br/>
      <br/>
      Kandungan :<br/>
      • Dekstrosa Monohidrat<br/>
      • Maltodekstrin<br/>
      • Antioksidan Asam Askorbat<br/>
      • Extract White ginseng <br/>
      • Chlorophyll <br/>
      • Cordyceps <br/>
      • Perisa Apple <br/>
      • Antikempal Silikon Dioksida<br/>
      <br/>
      Cara konsumsi :<br/>
      <br/>
      1. 1 sachet setiap 3 hari <br/>

      2. Letakkan bubuk KRAKATAU dibawah lidah. Campur dengan air liur dan telan perlahan. Lalu minum air putih. <br/>

      3. Sangat baik dikonsumsi jam 6 sore - 8 malam.<br/>

      Untuk diperhatikan jika tubuh dalam kondisi prima, efek imunisasi ( healing crisis  ) hanya terasa sedikit.<br/>
      Jika sedang tidak fit efek akan terasa lebih dominan bisa saja sampai demam. Setelah masa itu lewat, tubuh akan kebal terhadap virus. Jika saat mengkonsumsi KRAKATAU, tubuh tiba² terasa tidak enak dan nyeri, berarti sedang mengalami healing crisis. Tetap konsumsi KRAKATAU. <br/><br/>

      UNTUK KONSUMSI PERTAMA KALI, DOSIS YANG DIGUNAKAN ADALAH 1/2 SACHET.`,
      mainFeature: "Manfaat/Keunggulan",
      features: [
      'Pria & Wanita :',
      '✔️ Sangat baik untuk membantu mengatasi gangguan pada paru - paru seperti Batuk, Asma, TBC, Flek, radang, dll',
      '✔️ Membantu mengatasi gangguan ginjal, Menguatkan Ginjal',
      '✔️ Sebagai Anti–kanker dan memerangi sel kanker terutama kanker kulit dan paru-paru',
      ],
    },
    {
      name: "Maxx Bee Suplement",
      price: "$37.99",
      img: Paket1,
      duration: "Monthly",
      mainFeature: "Manfaat/Keunggulan",
      features: [
        '✔️ Mengatasi masalah paru-paru, maag, kolestrol, diabetes, asam urat',
        '✔️ Bahkan aromanya saja sudah berkhasiat dan tanpa efek samping',
        '✔️ Khasiatnya terasa dalam 21 hari bahkan kurang',
        '✔️ Kadar flavonoids 4-14 kali lebih tinggi',
        '✔️ Mengikuti standar GMP',
        '✔️ Sertifikasi BPOM, bebas alkohol',
      ],
      description: `<div style="text-align: left !important;justify-content: left !important">KHASIAT & MANFAAT PROPOLIS Maxx Bee Suplement (MBS)  :<br/>
      <br/>
      Khasiatnya khusus untuk STAMINA, PEMULIHAN dan KECERDASAN ANAK.<br/>
      <br/>
      Soal pemulihan, terbukti membantu mengatasi :<br/>
      ✔️ Masalah paru-paru, <br/>
      ✔️ Maag, <br/>
      ✔️ Kolestrol, <br/>
      ✔️ Diabetes,<br/>
      ✔️ Asam urat. <br/>
      ✔️ Bahkan aromanya saja sudah berkhasiat, dan<br/>
      ✔️ Tanpa efek samping.<br/>
      <br/>
      KEUNGGULAN :<br/>
      ✔️ Khasiatnya terasa dalam 21 hari bahkan kurang<br/>
      ✔️ Kadar flavonoids 4-14 kali lebih tinggi<br/>
      ✔️ Mengikuti standar GMP<br/>
      ✔️ Sertifikasi BPOM ,bebas alkohol.<br/>
      <br/>
      CARA MINUM  :<br/>
      - Teteskan 5 - 7 tetes propolis dicampur dengan 1/2 gelas air hangat.<br/>
      - Umur 5-12 tahun : Teteskan 2-3 tetes propolis ke dalam 50ml air hangat, diminum 2 kali sehari pagi dan malam.<br/>
      - Dibawah 5 tahun : Teteskan 1-2 tetes Propolis ke dalam 1 sendok teh air hangat, diminum 1 kali sehari.<br/>
      <br/>
      Untuk menjaga stamina dan daya tahan tubuh cukup 1 kali sehari<br/>
      Jika sedang tidak enak badan / untuk pengobatan diminum 2-3 kali sehari.</div>`,
      featured: true,
    },
    {
      name: "MAXX PRO COFFEE",
      img: Paket3,
      description: `<div style="text-align: left !important;justify-content: left !important">Manfaat MAXX PRO COFFEE :<br/>
      Untuk Pria :<br/>
      ☕ Meningkatkan Vitalitas Pria.<br/>
      ☕ Meningkatkan Kualitas Ereksi.<br/>
      ☕ Mengatasi Ejakulasi Dini.<br/>
      ☕ Merangsang Gairah Seksual.<br/>
      ☕ Mengatasi Impoten.<br/>
      ☕ Menurunkan Kolesterol.<br/>
      ☕ Menurunkan Tekanan Darah.<br/>
      ☕ Memelihara Kesehatan Jantung.<br/>
      ☕ Membantu Fungsi Hati.<br/>
      <br/>
      👩‍🦰 Untuk Wanita :<br/>
      <br/>
      ☕ Memenuhi Kebutuhan Zat Besi.<br/>
      ☕ Menyehatkan Rahim.<br/>
      ☕ Melancarkan Haid.<br/>
      ☕ Meningkatkan Gairah Seksual.<br/>
      ☕ Menyuburkan Kandungan (Promil/Program Hamil).<br/>
      ☕ Mencegah Kanker,Miom Kista dan Tumor.<br/>
      ☕ Mencegah Penyakit Alzheimer (Pikun).<br/>
      ☕ Mencegah Stroke.<br/>
      ☕ Mencegah Flu dan Pilek.<br/>
      ☕ Menurunkan Kadar Gula Darah.<br/>
      ☕ Mengurangi Peradangan.<br/>
      ☕ Memelihara Fungsi Otak.<br/>
      ☕ Meningkatkan Daya Tahan Tubuh.<br/>
      ☕ Mencegah Penuaan Dini.<br/>
      ☕ Menurunkan Resiko Kanker.<br/>
      ☕ Membantu Meredakan Stres.<br/>
      ☕ Meningkatkan Performa Akademik.<br/>
      ☕ Membantu Diet Penurunan Berat Badan.<br/>
      ☕ Meredakan Diare.<br/>
      ☕ Mengatasi Konstipasi/Sembelit<br/><br/>

      Kandungan Maxx Pro Coffee :<br/>
      • Krimer Protein Susu<br/>
      • Gula Aren<br/>
      • Kopi Bubuk Robusta<br/>
      • Perisa Sintetik Ginseng<br/>
      • Cordyceps</div>`,
      mainFeature: "Manfaat/Keunggulan",
      features: [
          'Untuk Pria:',
          '☕ Meningkatkan Vitalitas Pria, Meningkatkan Kualitas Ereksi',
          '☕ Mengatasi Ejakulasi Dini,Mengatasi Impoten.',
          '☕ Menurunkan Kolesterol, Tekanan Darah, Memelihara Kesehatan Jantung, Membantu Fungsi Hati, Merangsang Gairah Seksual.',
      ],
    },
  ];
  const fullPlans = [
    {
      name: "KRAKATAU SUPLEMEN (CORDY MAXX)",
      img: Paket2,
      description: `<div style="text-align: left !important;justify-content: left !important">KRAKATAU SUPLEMEN atau CORDY MAXX<br/>
      <br/>
      ( 1 Box isi 10 Sachet  )<br/>
      <br/>
      Krakatau & Cordy Maxx merupakan suplemen herbal yang tinggi kandungan anti oksidan. Sangat bermanfaat untuk kesehatan tubuh dan meningkatkan vitalitas pria. Krakatau memiliki empat kandungan bahan alami. <br/>
      <br/>
      Kandungan :<br/>
      • Dekstrosa Monohidrat<br/>
      • Maltodekstrin<br/>
      • Antioksidan Asam Askorbat<br/>
      • Extract White ginseng <br/>
      • Chlorophyll <br/>
      • Cordyceps <br/>
      • Perisa Apple <br/>
      • Antikempal Silikon Dioksida<br/>
      <br/>
      Cara konsumsi :<br/>
      <br/>
      1. 1 sachet setiap 3 hari <br/>

      2. Letakkan bubuk KRAKATAU dibawah lidah. Campur dengan air liur dan telan perlahan. Lalu minum air putih. <br/>

      3. Sangat baik dikonsumsi jam 6 sore - 8 malam.<br/>

      Untuk diperhatikan jika tubuh dalam kondisi prima, efek imunisasi ( healing crisis  ) hanya terasa sedikit.<br/>
      Jika sedang tidak fit efek akan terasa lebih dominan bisa saja sampai demam. Setelah masa itu lewat, tubuh akan kebal terhadap virus. Jika saat mengkonsumsi KRAKATAU, tubuh tiba² terasa tidak enak dan nyeri, berarti sedang mengalami healing crisis. Tetap konsumsi KRAKATAU. <br/><br/>

      UNTUK KONSUMSI PERTAMA KALI, DOSIS YANG DIGUNAKAN ADALAH 1/2 SACHET.`,
      mainFeature: "Manfaat/Keunggulan",
      features: [
      'Pria & Wanita :',
      '✔️ Sangat baik untuk membantu mengatasi gangguan pada paru - paru seperti Batuk, Asma, TBC, Flek, radang, dll',
      '✔️ Membantu mengatasi gangguan ginjal, Menguatkan Ginjal',
      '✔️ Sebagai Anti–kanker dan memerangi sel kanker terutama kanker kulit dan paru-paru',
      '✔️ Sebagai penawar racun dalam tubuh ',
      '✔️ Menyeimbangkan tekanan darah, Menenangkan syaraf, Membantu pengobatan penderita Tumor, Membantu meredakan peradangan, Melindungi jantung, meingkatkan daya tahan tubuh, menangani Diabetes ',
      '',
      'Khusus Untuk Pria :',
      '✔️ Meningkatkan Vitalitas dalam berhubungan intim',
      '✔️ Mencegah ereksi'
      ],
    },
    {
      name: "Maxx Bee Suplement",
      img: Paket1,
      mainFeature: "Manfaat/Keunggulan",
      features: [
        '✔️ Mengatasi masalah paru-paru, maag, kolestrol, diabetes, asam urat',
        '✔️ Bahkan aromanya saja sudah berkhasiat dan tanpa efek samping',
        '✔️ Khasiatnya terasa dalam 21 hari bahkan kurang',
        '✔️ Kadar flavonoids 4-14 kali lebih tinggi',
        '✔️ Mengikuti standar GMP',
        '✔️ Sertifikasi BPOM, bebas alkohol',
      ],
      description:`<div style="text-align: left !important;justify-content: left !important">KHASIAT & MANFAAT PROPOLIS Maxx Bee Suplement (MBS)  :<br/>
      <br/>
      Khasiatnya khusus untuk STAMINA, PEMULIHAN dan KECERDASAN ANAK.<br/>
      <br/>
      Soal pemulihan, terbukti membantu mengatasi :<br/>
      ✔️ Masalah paru-paru, <br/>
      ✔️ Maag, <br/>
      ✔️ Kolestrol, <br/>
      ✔️ Diabetes,<br/>
      ✔️ Asam urat. <br/>
      ✔️ Bahkan aromanya saja sudah berkhasiat, dan<br/>
      ✔️ Tanpa efek samping.<br/>
      <br/>
      KEUNGGULAN :<br/>
      ✔️ Khasiatnya terasa dalam 21 hari bahkan kurang<br/>
      ✔️ Kadar flavonoids 4-14 kali lebih tinggi<br/>
      ✔️ Mengikuti standar GMP<br/>
      ✔️ Sertifikasi BPOM ,bebas alkohol.<br/>
      <br/>
      CARA MINUM  :<br/>
      - Teteskan 5 - 7 tetes propolis dicampur dengan 1/2 gelas air hangat.<br/>
      - Umur 5-12 tahun : Teteskan 2-3 tetes propolis ke dalam 50ml air hangat, diminum 2 kali sehari pagi dan malam.<br/>
      - Dibawah 5 tahun : Teteskan 1-2 tetes Propolis ke dalam 1 sendok teh air hangat, diminum 1 kali sehari.<br/>
      <br/>
      Untuk menjaga stamina dan daya tahan tubuh cukup 1 kali sehari<br/>
      Jika sedang tidak enak badan / untuk pengobatan diminum 2-3 kali sehari.</div>`,
      featured: true,
    },
    {
      name: "MAXX PRO COFFEE",
      img: Paket3,
      description: `<div style="text-align: left !important;justify-content: left !important">Manfaat MAXX PRO COFFEE :<br/>
      Untuk Pria :<br/>
      ☕ Meningkatkan Vitalitas Pria.<br/>
      ☕ Meningkatkan Kualitas Ereksi.<br/>
      ☕ Mengatasi Ejakulasi Dini.<br/>
      ☕ Merangsang Gairah Seksual.<br/>
      ☕ Mengatasi Impoten.<br/>
      ☕ Menurunkan Kolesterol.<br/>
      ☕ Menurunkan Tekanan Darah.<br/>
      ☕ Memelihara Kesehatan Jantung.<br/>
      ☕ Membantu Fungsi Hati.<br/>
      <br/>
      👩‍🦰 Untuk Wanita :<br/>
      <br/>
      ☕ Memenuhi Kebutuhan Zat Besi.<br/>
      ☕ Menyehatkan Rahim.<br/>
      ☕ Melancarkan Haid.<br/>
      ☕ Meningkatkan Gairah Seksual.<br/>
      ☕ Menyuburkan Kandungan (Promil/Program Hamil).<br/>
      ☕ Mencegah Kanker,Miom Kista dan Tumor.<br/>
      ☕ Mencegah Penyakit Alzheimer (Pikun).<br/>
      ☕ Mencegah Stroke.<br/>
      ☕ Mencegah Flu dan Pilek.<br/>
      ☕ Menurunkan Kadar Gula Darah.<br/>
      ☕ Mengurangi Peradangan.<br/>
      ☕ Memelihara Fungsi Otak.<br/>
      ☕ Meningkatkan Daya Tahan Tubuh.<br/>
      ☕ Mencegah Penuaan Dini.<br/>
      ☕ Menurunkan Resiko Kanker.<br/>
      ☕ Membantu Meredakan Stres.<br/>
      ☕ Meningkatkan Performa Akademik.<br/>
      ☕ Membantu Diet Penurunan Berat Badan.<br/>
      ☕ Meredakan Diare.<br/>
      ☕ Mengatasi Konstipasi/Sembelit<br/><br/>

      Kandungan Maxx Pro Coffee :<br/>
      • Krimer Protein Susu<br/>
      • Gula Aren<br/>
      • Kopi Bubuk Robusta<br/>
      • Perisa Sintetik Ginseng<br/>
      • Cordyceps</div>`,
      mainFeature: "Manfaat/Keunggulan",
      features: [
          'Untuk Pria:',
          '☕ Meningkatkan Vitalitas Pria, Meningkatkan Kualitas Ereksi',
          '☕ Mengatasi Ejakulasi Dini,Mengatasi Impoten.',
          '☕ Menurunkan Kolesterol, Tekanan Darah, Memelihara Kesehatan Jantung, Membantu Fungsi Hati, Merangsang Gairah Seksual.',
          '',
          'Untuk Wanita :',
          '☕ Memenuhi Kebutuhan Zat Besi, Menyehatkan Rahim, Melancarkan Haid, Meningkatkan Gairah Seksual.',
          '☕ Menyuburkan Kandungan (Promil/Program Hamil).',
          '☕ Mencegah Kanker, Miom Kista, Tumor, penyakit Alzheimer (Pikun), Stroke, Flu dan Pilek, Penuaan Dini.',
          '☕ Menurunkan Kadar Gula Darah.',
          '☕ Mengurangi Peradangan, Memelihara Fungsi Otak, Meningkatkan Daya Tahan Tubuh, Membantu Meredakan Stres.',
          '☕ Meningkatkan Performa Akademik, Membantu Diet Penurunan Berat Badan, Meredakan Diare, Mengatasi Konstipasi/Sembelit',
      ],
    },
  ];

  // if (!plans) plans = defaultPlans;

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
    `,
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
    `
  ];
  

  const [Feature, setFeature] = useState(defaultPlans)
  const [Show, setShow] = useState(0)

  const handleOnclick=()=>{
    if(Show===1){
      setShow(0)
      setFeature(defaultPlans)
    }else{
      setShow(1)
      setFeature(fullPlans)
    }
  }



  return (
    <Container id="pricing">
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {Feature.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && <div className="planHighlight" css={highlightGradientsCss[index % highlightGradientsCss.length]} />}
              <PlanHeader>
                <img src={plan.img} alt={plan.name} />
                <span className="name">{plan.name}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className="feature mainFeature">{plan.mainFeature}</span>
                {plan.features.map((feature, idx) => (
                      <span key={index} className="feature">
                      {feature}
                    </span>
                ))}
                <br/>
                <ShowHide onClick={()=>handleOnclick()}>{Show===0?'Show':'Hide'}...</ShowHide>
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton
                  onClick={
                    ()=>{
                      Swal.fire({
                        title: '',
                        html:plan.description,
                        focusConfirm: false,
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: 'Oke!',
                      }).then((result) => {
                        if (result.isConfirmed) {
                        }
                      })
                    }
                  }
                 css={!plan.featured && highlightGradientsCss[index]}>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
