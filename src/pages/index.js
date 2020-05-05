import React from "react"
import Hero from "../components/Hero"
import StoreLink from "../components/StoreLink"
import Screenshot from "../components/Screenshot"
import Footer from "../components/Footer"
import Description from "../components/Description"
import Divider from "../components/Divider"
import exampleData from "../../example-data"


const Index = () => {
  const data = exampleData.gamePage


  return (

    <main className="main">

      <Hero heroImg={data.screenshots[2].path_full}>
        <div className="hero__heading">
          <h1>{data.gameName}</h1>
        </div>
          <StoreLink appid={data.appid} packageid={data.packageid} gameName={data.gameName} />

      </Hero>
      <article className="content">

        <Divider />
        <Description description={data.description} />
        <Divider />
        <Screenshot screenshots={data.screenshots} />
      </article>
      <Divider />
      <Footer legalNotice={data.legalNotice} supportInfo={data.supportInfo} />
    </main>

  )
}
export default Index