import React from 'react'
import "./Brand.css"
import{
    google,
    slack,
    atlassian,
    dropbox,
    shopify 
} from "./import.js"

const Brand = () => {
    return (
        <div className="gpt3__brand section_padding">
          <div>
              <img src={google} alt="" />
          </div>
          {/*  */}
          <div>
              <img src={slack} alt="slack" />
          </div>
          {/*  */}
          <div>
              <img src={atlassian} alt="atlassian" />
          </div>
          {/*  */}
          <div>
              <img src={dropbox} alt="dropbox" />
          </div>
          {/*  */}
          <div>
              <img src={shopify} alt="shopify" />
          </div>
          {/*  */}
        </div>
    )
}

export default Brand
