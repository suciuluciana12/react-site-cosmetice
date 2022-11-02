import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Views from './components/Views'

function App() {
  const [productData, setProductData] = useState([])
  const [modif, setModif] = useState(false)

  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => {
    setSubnav(!subnav)
  }

  useEffect(() => {
    fetch('evenimente.php')
      // .then((raspuns) => console.log(raspuns))
      .then((rezultat) => rezultat.json())
      .then((rez) => setProductData(rez))
    // .then((rez) => {
    //   // console.log(typeof rez)
    //   console.log(rez)
    // })

    // .then((raspuns) => raspuns.text())
    // .then((text) => console.log(text))

    // .then((data) => {
    //   setProductData(JSON.parse(data))
    // })
  }, [modif])
  if (productData === []) {
    console.log('bau')
  } else {
    console.log(productData)
  }
  // ==============CLOSING THE DROPTDOWN MENU ON CLICK OUTSIDE======================

  const dropdownRef = useRef()
  useEffect(() => {
    const clickOutside = (e) => {
      if (subnav && !dropdownRef.current.contains(e.target)) {
        setSubnav(false)
      }
    }

    window.addEventListener('click', clickOutside)
    return () => {
      window.removeEventListener('click', clickOutside)
    }
  }, [subnav])

  const [ten_normal_uscat, setTen_normal_uscat] = useState([])
  const [ten_gras_mixt, setTen_gras_mixt] = useState([])
  const [seruri_contur_ochi, setSeruri_contur_ochi] = useState([])
  const [curatare_igiena_orala, setCuratare_igiena_orala] = useState([])
  const [masti_depigmentare, setMasti_depigmentare] = useState([])
  const [ingrijirea_corpului, setIngrijirea_corpului] = useState([])
  const [creme_de_corp, setCreme_de_corp] = useState([])
  const [unguente_unturi, setUnguente_unturi] = useState([])
  const [uleiuri_de_corp, setUleiuri_de_corp] = useState([])
  const [ingrijirea_parului, setIngrijirea_parului] = useState([])
  const [probleme_dermatologice, setProbleme_dermatologice] = useState([])
  const [dermatita_seboreica, setDermatita_seboreica] = useState([])
  const [dermatita_atopica, setDermatita_atopica] = useState([])
  const [psoriazis, setPsoriazis] = useState([])
  const [acnee, setAcnee] = useState([])
  //-------Constantele folosite pt filtrele de pe component TEN USCAT / NORMAL :-----
  const [ten_usor_uscat, setTen_usor_uscat] = useState([])
  const [ten_moderat_uscat, setTen_moderat_uscat] = useState([])
  const [ten_foarte_uscat, setTen_foarte_uscat] = useState([])
  const [ten_normal, setTen_normal] = useState([])
  const [ten_normal_uscat_sensibil, setTen_normal_uscat_sensibil] = useState([])
  const [ten_normal_uscat_fps, setTen_normal_uscat_fps] = useState([])
  const [ten_normal_uscat_seruri, setTen_normal_uscat_seruri] = useState([])
  const [ten_normal_uscat_acizi, setTen_normal_uscat_acizi] = useState([])
  const [ten_normal_uscat_unguente, setTen_normal_uscat_unguente] = useState([])
  //-------Constantele folosite pt filtrele de pe componenta TEN GRAS / MIXT :-----
  const [ten_gras, setTen_gras] = useState([])
  const [ten_mixt, setTen_mixt] = useState([])
  const [ten_gras_mixt_sensibil, setTen_gras_mixt_sensibil] = useState([])
  const [ten_gras_mixt_fps, setTen_gras_mixt_fps] = useState([])
  const [ten_gras_mixt_acizi, setTen_gras_mixt_acizi] = useState([])
  const [ten_gras_mixt_seruri, setTen_gras_mixt_seruri] = useState([])
  //-------Constantele folosite pt filtrele de pe componenta MASTI / DEPIGMENTARE :-----
  const [masti, setMasti] = useState([])
  const [depigmentare_usoara, setDepigmentare_usoara] = useState([])
  const [depigmentare_moderata, setDepigmentare_moderata] = useState([])
  const [depigmentare_puternica, setDepigmentare_puternica] = useState([])
  const [balsam_buze, setBalsam_buze] = useState([])

  useEffect(() => {
    if (productData !== []) {
      //Constantele prin care retin datele de produse pt fiecare pagina
      setTen_normal_uscat(
        productData.filter((item) => {
          return item.categorie_principala.includes('ten_normal_uscat')
        }),
      )
      setTen_gras_mixt(
        productData.filter((item) => {
          return item.categorie_principala.includes('ten_gras_mixt')
        }),
      )
      setSeruri_contur_ochi(
        productData.filter((item) => {
          return item.categorie_principala.includes('seruri_contur_ochi')
        }),
      )

      setCuratare_igiena_orala(
        productData.filter((item) => {
          return item.categorie.includes('curatare')
        }),
      )
      setMasti_depigmentare(
        productData.filter((item) => {
          return item.categorie_principala.includes('masti_depigmentare')
        }),
      )
      setIngrijirea_corpului(
        productData.filter((item) => {
          return item.categorie_principala.includes('ingrijirea_corpului')
        }),
      )
      setCreme_de_corp(
        productData.filter((item) => {
          return item.categorie.includes('creme-de-corp')
        }),
      )
      setUnguente_unturi(
        productData.filter((item) => {
          return item.categorie.includes('unguente-unturi')
        }),
      )
      setUleiuri_de_corp(
        productData.filter((item) => {
          return item.categorie.includes('uleiuri-de-corp')
        }),
      )
      setIngrijirea_parului(
        productData.filter((item) => {
          return item.categorie_principala.includes('ingrijirea_parului')
        }),
      )
      setProbleme_dermatologice(
        productData.filter((item) => {
          return item.categorie_principala.includes('probleme_dermatologice')
        }),
      )
      setDermatita_seboreica(
        productData.filter((item) => {
          return item.categorie.includes('dermatita-seboreica')
        }),
      )
      setDermatita_atopica(
        productData.filter((item) => {
          return item.categorie.includes('dermatita-atopica')
        }),
      )
      setPsoriazis(
        productData.filter((item) => {
          return item.categorie.includes('psoriazis')
        }),
      )
      setAcnee(
        productData.filter((item) => {
          return item.categorie_principala.includes('ten_acneic')
        }),
      )
      //-------Constantele folosite pt filtrele de pe component TEN USCAT / NORMAL :-----
      setTen_usor_uscat(
        productData.filter((item) => {
          return item.categorie.includes('ten-usor-uscat')
        }),
      )
      setTen_moderat_uscat(
        productData.filter((item) => {
          return item.categorie.includes('ten-moderat-uscat')
        }),
      )
      setTen_foarte_uscat(
        productData.filter((item) => {
          return item.categorie.includes('ten-foarte-uscat')
        }),
      )
      setTen_normal(
        productData.filter((item) => {
          return item.categorie.includes('ten-normal')
        }),
      )

      setTen_normal_uscat_seruri(
        productData.filter((item) => {
          return item.categorie.includes('seruri')
        }),
      )
    }
  }, [productData])

  useEffect(() => {
    if (ten_normal_uscat !== []) {
      setTen_normal_uscat_sensibil(
        ten_normal_uscat.filter((item) => {
          return item.categorie.includes('ten-sensibil')
        }),
      )
      setTen_normal_uscat_fps(
        ten_normal_uscat.filter((item) => {
          return item.categorie.includes('fps')
        }),
      )
      setTen_normal_uscat_acizi(
        ten_normal_uscat.filter((item) => {
          return item.categorie.includes('acizi')
        }),
      )
      setTen_normal_uscat_unguente(
        ten_normal_uscat.filter((item) => {
          return item.categorie.includes('unguente-unturi')
        }),
      )
    }
  }, [ten_normal_uscat])

  //-------Constantele folosite pt filtrele de pe componenta TEN GRAS / MIXT :-----
  useEffect(() => {
    if (ten_gras_mixt !== []) {
      setTen_gras(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('ten-gras')
        }),
      )
      setTen_mixt(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('ten-mixt')
        }),
      )
      setTen_gras_mixt_sensibil(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('ten-sensibil')
        }),
      )
      setTen_gras_mixt_fps(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('fps')
        }),
      )
      setTen_gras_mixt_acizi(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('acizi')
        }),
      )
      setTen_gras_mixt_seruri(
        ten_gras_mixt.filter((item) => {
          return item.categorie.includes('seruri')
        }),
      )
    }
  }, [ten_gras_mixt])

  useEffect(() => {
    if (masti_depigmentare !== []) {
      setMasti(
        masti_depigmentare.filter((item) => {
          return item.categorie.includes('masca')
        }),
      )
      setDepigmentare_usoara(
        masti_depigmentare.filter((item) => {
          return item.categorie.includes('depigmentare-usoara')
        }),
      )
      setDepigmentare_moderata(
        masti_depigmentare.filter((item) => {
          return item.categorie.includes('depigmentare-moderata')
        }),
      )
      setDepigmentare_puternica(
        masti_depigmentare.filter((item) => {
          return item.categorie.includes('depigmentare-puternica')
        }),
      )
      setBalsam_buze(
        masti_depigmentare.filter((item) => {
          return item.categorie.includes('balsam-buze')
        }),
      )
    }
  }, [masti_depigmentare])

  return (
    <>
      <div
        className="position-relative"
        style={{ backgroundColor: '#eeeeee', minHeight: '100vh' }}
      >
        <Header
          subnav={subnav}
          setSubnav={setSubnav}
          showSubnav={showSubnav}
          dropdownRef={dropdownRef}
        />

        <Views
          ten_normal_uscat={ten_normal_uscat}
          ten_usor_uscat={ten_usor_uscat}
          ten_moderat_uscat={ten_moderat_uscat}
          ten_foarte_uscat={ten_foarte_uscat}
          ten_normal={ten_normal}
          ten_normal_uscat_sensibil={ten_normal_uscat_sensibil}
          ten_normal_uscat_fps={ten_normal_uscat_fps}
          ten_normal_uscat_seruri={ten_normal_uscat_seruri}
          ten_normal_uscat_acizi={ten_normal_uscat_acizi}
          ten_normal_uscat_unguente={ten_normal_uscat_unguente}
          ten_gras_mixt={ten_gras_mixt}
          ten_gras={ten_gras}
          ten_mixt={ten_mixt}
          ten_gras_mixt_sensibil={ten_gras_mixt_sensibil}
          ten_gras_mixt_fps={ten_gras_mixt_fps}
          ten_gras_mixt_acizi={ten_gras_mixt_acizi}
          ten_gras_mixt_seruri={ten_gras_mixt_seruri}
          seruri_contur_ochi={seruri_contur_ochi}
          curatare_igiena_orala={curatare_igiena_orala}
          masti_depigmentare={masti_depigmentare}
          masti={masti}
          depigmentare_usoara={depigmentare_usoara}
          depigmentare_moderata={depigmentare_moderata}
          depigmentare_puternica={depigmentare_puternica}
          balsam_buze={balsam_buze}
          ingrijirea_corpului={ingrijirea_corpului}
          creme_de_corp={creme_de_corp}
          unguente_unturi={unguente_unturi}
          uleiuri_de_corp={uleiuri_de_corp}
          ingrijirea_parului={ingrijirea_parului}
          probleme_dermatologice={probleme_dermatologice}
          dermatita_seboreica={dermatita_seboreica}
          dermatita_atopica={dermatita_atopica}
          psoriazis={psoriazis}
          acnee={acnee}
          productData={productData}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
