import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HeaderImg from '../components/HeaderImg'

const stil = {
  wrap: { width: '100%' },
  content: {
    boxShadow: '  0 6px 10px 0 rgba(0, 0, 0, 0.5)',
    marginTop: '20px',
    padding: '5px',
  },
}
const IngrijireaFetei = () => {
  return (
    <>
      <HeaderImg />

      <Container style={stil.wrap}>
        <div style={stil.content}>
          <Row>
            <h1 className="fw-bold text-center mt-5"> Îngrijirea feței</h1>
          </Row>
          <Row>
            <h3 className="text-center mt-4 mb-4">
              Care sunt principalele tipuri de ten
            </h3>
          </Row>
          <Row>
            <ul className="p-5">
              <li>
                <span>Tenul uscat</span> - acest tip de ten este caracterizat de
                o piele care produce mai puțin sebum decât în mod normal.
                Astfel, pielea este lipsită de hidratare și predispusă la
                apariția ridurilor fine și superficiale. Tenul este mat, cu pori
                mici, iar pielea este subțire și sensibilă.
              </li>
              <li>
                <span>Tenul normal</span> - este caracterizat de o piele netedă
                și elastică, cu o textură catifelată și o culoare rozalie, cu
                pori mici și cu o bună circulație a vaselor de sânge. Deși zona
                T (frunte, bărbie, nas) poate să fie puțin uleioasă, pielea nu
                are tendința să se îngrașe sau să fie prea uscată. Tenul normal
                nu este predispus la sensibilitate ridicată.
              </li>
              <li>
                <span>Tenul gras</span>- spre deosebire de tenul uscat, acest
                tip de ten este caracterizat de producerea unei cantități mai
                mari de sebum (seboree). Tenul este lipsit de suplețe și este
                unsuros și lucios, în special în zona T. Din cauza excesului de
                sebum, tenul poate să capete o tentă gălbuie în timp, însă
                ridurile apar mai greu. Tenul gras favorizează apariția
                coșurilor și a acneei.
              </li>
              <li>
                <span>Tenul mixt </span> - este caracterizat de excesul de sebum
                în zona T, în timp ce restul tenului este uscat, în special
                obrajii. De obicei, porii din zona T sunt mari și pot să apară
                coșuri.
              </li>
            </ul>
          </Row>
          <Row>
            <h3 className="text-center mt-4 mb-4">
              Rutina corectă de îngrijire a tenului
            </h3>
          </Row>
          <Row>
            <ul className="p-5">
              <li>
                <span>Curățarea și demachierea tenului</span> - spală-te cu apă
                pe față, dimineața și seara. Pentru curățarea tenului gras sau
                acneic folosește un demachiant care conține acid salicilic sau
                peroxid de benzoil. Pentru tenul uscat e recomandat să folosești
                un produs hidratant și blând cu pielea, care nu conține parfum.
              </li>
              <li>
                <span>Exfolierea tenului</span> - acest proces ajută la
                îndepărtarea celulor moarte și îți lasă pielea curată și
                catifelată. Alege un exfoliant cu granule fine, care să nu îți
                irite tenul. Dacă ai tenul sensibil, evită exfoliantele cu
                granule din coji de nuci. E recomandat să exfoliezi tenul de cel
                mult două ori pe săptămână. Dacă ai tenul uscat, poți repeta
                această procedură zilnic, cu un produs care conține acid
                glicolic sau acid lactic.
              </li>
              <li>
                <span>Hidratarea tenului </span>- hidratarea este esențială
                pentru orice tip de ten, chiar și pentru cel gras, însă alege un
                produs mai light sau pe bază de gel. Odată ce ai aplicat crema
                hidratantă, masează ușor pielea cu mișcări circulare. Astfel vei
                îmbunătăți circulația sângelui, iar crema va fi absorbită mai
                repede în piele. Pe timpul iernii poți alege o cremă puternic
                hidratantă. Vara este indicat să folosești o cremă mai ușoară,
                de preferat cu factor de protecție solară.
              </li>
            </ul>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default IngrijireaFetei
