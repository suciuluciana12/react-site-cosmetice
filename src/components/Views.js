import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Componenta from './Componenta'
import DetaliiProdus from '../pages/DetaliiProdus'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import IngrijireaFetei from '../pages/IngrijireaFetei'

const Views = ({
  ten_normal_uscat,
  ten_usor_uscat,
  ten_moderat_uscat,
  ten_foarte_uscat,
  ten_normal,
  ten_normal_uscat_sensibil,
  ten_normal_uscat_fps,
  ten_normal_uscat_seruri,
  ten_normal_uscat_acizi,
  ten_normal_uscat_unguente,
  ten_gras_mixt,
  ten_gras,
  ten_mixt,
  ten_gras_mixt_sensibil,
  ten_gras_mixt_fps,
  ten_gras_mixt_acizi,
  ten_gras_mixt_seruri,
  seruri_contur_ochi,
  curatare_igiena_orala,
  masti_depigmentare,
  masti,
  depigmentare_usoara,
  depigmentare_moderata,
  depigmentare_puternica,
  balsam_buze,
  ingrijirea_corpului,
  creme_de_corp,
  unguente_unturi,
  uleiuri_de_corp,
  ingrijirea_parului,
  probleme_dermatologice,
  dermatita_seboreica,
  dermatita_atopica,
  psoriazis,
  acnee,
  productData,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ingrijirea_fetei" element={<IngrijireaFetei />} />
        {/* ----------------------------------TEN NORMAL USCAT------------------------ */}
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat}
              titluComponenta={'Ten normal / uscat '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        {/* Filtrele de pe pagina Ten normal/uscat :*/}
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/toate"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat}
              titluComponenta={'Ten normal / uscat '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/ten_usor_uscat"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_usor_uscat}
              titluComponenta={'Ten ușor uscat '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/ten_moderat_uscat"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_moderat_uscat}
              titluComponenta={'Ten moderat uscat '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/ten_foarte_uscat"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_foarte_uscat}
              titluComponenta={'Ten foarte uscat '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/ten_normal"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal}
              titluComponenta={'Ten normal '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/ten_sensibil"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat_sensibil}
              titluComponenta={'Ten sensibil '}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/fps"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat_fps}
              titluComponenta={'Produse cu protecție solară'}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/seruri"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat_seruri}
              titluComponenta={'Seruri'}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/acizi"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat_acizi}
              titluComponenta={'Acizi'}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_normal_uscat/unguente_unturi"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_normal_uscat_unguente}
              titluComponenta={'Unguente / Unturi'}
              categorie_principala={'ten_normal_uscat'}
            />
          }
        />

        {/* -------------------------------TEN GRAS / MIXT : ------------------------------- */}
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt}
              titluComponenta={'Ten gras / mixt '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        {/* Filtrele de pe pagina Ten gras/mixt : */}
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/toate"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt}
              titluComponenta={'Ten gras / mixt '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/ten_gras"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras}
              titluComponenta={'Ten gras'}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/ten_mixt"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_mixt}
              titluComponenta={'Ten mixt '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/ten_sensibil"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt_sensibil}
              titluComponenta={'Ten sensibil '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/fps"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt_fps}
              titluComponenta={'Produse cu protecție solară'}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/acizi"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt_acizi}
              titluComponenta={'Acizi '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/ten_gras_mixt/seruri"
          element={
            <Componenta
              dateFunctieDeCategorie={ten_gras_mixt_seruri}
              titluComponenta={'Seruri '}
              categorie_principala={'ten_gras_mixt'}
            />
          }
        />

        <Route
          path="/ingrijirea_fetei/seruri_contur_ochi"
          element={
            <Componenta
              dateFunctieDeCategorie={seruri_contur_ochi}
              titluComponenta={'Seruri / Contur ochi  '}
              categorie_principala={'seruri_contur_ochi'}
            />
          }
        />

        <Route
          path="/ingrijirea_fetei/curatare_igiena_orala"
          element={
            <Componenta
              dateFunctieDeCategorie={curatare_igiena_orala}
              titluComponenta={'Produse de curățare / Igiena orală '}
              categorie_principala={'curatare_igiena_orala'}
            />
          }
        />

        {/* -------------------------------MASTI / DEPIGMENTARE / BALSAM BUZE: ------------------------------- */}
        <Route
          path="/ingrijirea_fetei/masti_depigmentare"
          element={
            <Componenta
              dateFunctieDeCategorie={masti_depigmentare}
              titluComponenta={
                'Măști cu argile / Depigmentare/ Balsam de buze '
              }
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/toate"
          element={
            <Componenta
              dateFunctieDeCategorie={masti_depigmentare}
              titluComponenta={'Toate  '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/masti"
          element={
            <Componenta
              dateFunctieDeCategorie={masti}
              titluComponenta={'Măști  '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/depigmentare_usoara"
          element={
            <Componenta
              dateFunctieDeCategorie={depigmentare_usoara}
              titluComponenta={'Depigmentare ușoară '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/depigmentare_moderata"
          element={
            <Componenta
              dateFunctieDeCategorie={depigmentare_moderata}
              titluComponenta={'Depigmentare moderată '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/depigmentare_puternica"
          element={
            <Componenta
              dateFunctieDeCategorie={depigmentare_puternica}
              titluComponenta={'Depigmentare puternică '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />
        <Route
          path="/ingrijirea_fetei/masti_depigmentare/balsam_de_buze"
          element={
            <Componenta
              dateFunctieDeCategorie={balsam_buze}
              titluComponenta={' Balsam de buze '}
              categorie_principala={'masti_depigmentare'}
            />
          }
        />

        <Route
          path="/ingrijirea_corpului"
          element={
            <Componenta
              dateFunctieDeCategorie={ingrijirea_corpului}
              titluComponenta={'Produse pentru corp '}
              categorie_principala={'ingrijirea_corpului'}
            />
          }
        />
        <Route
          path="/ingrijirea_corpului/toate"
          element={
            <Componenta
              dateFunctieDeCategorie={ingrijirea_corpului}
              titluComponenta={'Produse pentru corp '}
              categorie_principala={'ingrijirea_corpului'}
            />
          }
        />
        <Route
          path="/ingrijirea_corpului/creme_de_corp"
          element={
            <Componenta
              dateFunctieDeCategorie={creme_de_corp}
              titluComponenta={'Creme de corp '}
              categorie_principala={'ingrijirea_corpului'}
            />
          }
        />

        <Route
          path="/ingrijirea_corpului/unguente_unturi"
          element={
            <Componenta
              dateFunctieDeCategorie={unguente_unturi}
              titluComponenta={'Unguente / Unturi '}
              categorie_principala={'ingrijirea_corpului'}
            />
          }
        />

        <Route
          path="/ingrijirea_corpului/uleiuri_de_corp"
          element={
            <Componenta
              dateFunctieDeCategorie={uleiuri_de_corp}
              titluComponenta={'Uleiuri de corp '}
              categorie_principala={'ingrijirea_corpului'}
            />
          }
        />

        <Route
          path="/ingrijirea_parului"
          element={
            <Componenta
              dateFunctieDeCategorie={ingrijirea_parului}
              titluComponenta={'Produse pentru păr '}
              categorie_principala={'ingrijirea_parului'}
            />
          }
        />

        <Route
          path="/probleme_dermatologice"
          element={
            <Componenta
              dateFunctieDeCategorie={probleme_dermatologice}
              titluComponenta={'Probleme dermatologice'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />
        <Route
          path="/probleme_dermatologice/toate"
          element={
            <Componenta
              dateFunctieDeCategorie={probleme_dermatologice}
              titluComponenta={'Probleme dermatologice'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />
        <Route
          path="/probleme_dermatologice/dermatita_seboreica"
          element={
            <Componenta
              dateFunctieDeCategorie={dermatita_seboreica}
              titluComponenta={'Dermatită seboreică'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />

        <Route
          path="/probleme_dermatologice/dermatita_atopica"
          element={
            <Componenta
              dateFunctieDeCategorie={dermatita_atopica}
              titluComponenta={'Dermatită atopică'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />

        <Route
          path="/probleme_dermatologice/psoriazis"
          element={
            <Componenta
              dateFunctieDeCategorie={psoriazis}
              titluComponenta={'Psoriazis'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />

        <Route
          path="/probleme_dermatologice/acnee"
          element={
            <Componenta
              dateFunctieDeCategorie={acnee}
              titluComponenta={'Acnee'}
              categorie_principala={'probleme_dermatologice'}
            />
          }
        />

        <Route
          path="/produs/:id"
          element={<DetaliiProdus productData={productData} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default Views
