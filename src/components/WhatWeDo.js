import React from 'react'
import Jobs from './Jobs'
import colors from '../consts/colors'
import darkColors from '../consts/darkColors'

const WhatWeDo = ({style,h1,p}) => {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor: colors.black,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
gap:"2rem",
      padding: "1rem",
      position: "relative",
      paddingTop: "15rem",
    }}>
            <h1 style={{fontSize: "3rem",fontFamily: "Anton",color: colors.black,textAlign:"start",position:"absolute",top:"2rem",left:"4rem"}}>OmTun Ne İş Yapıyor?</h1>

      <Jobs bg={colors.red} h1={"Web Teknolojileri"} p={"Geliştirdiğimiz kaliteli web uygulamaları ile işletmenizin kullanıcı dostu olmasını ve müşteriye kolay erişimini sağlıyoruz"}  />
      <Jobs bg={colors.yellow} h1={"Mobil Teknolojileri"} p={"Geliştirdiğimiz kaliteli mobil uygulamaları ile işletmenizin kullanıcı dostu olmasını ve müşteriye kolay erişimini başarıyoruz"} style={{flexDirection: "row-reverse"}} />
      <Jobs bg={colors.green} h1={"Yapay Zeka Teknolojileri"} p={"Geliştirdiğimiz kaliteli yapay zeka uygulamaları ile işletmenizin kullanıcı dostu olmasını ve öğrencilere kolay erişimini başarıyoruz"} />
    </div>
  )
}

export default WhatWeDo