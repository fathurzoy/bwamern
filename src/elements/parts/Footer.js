
import React from 'react'

import Button from 'elements/Button'
import IconText from './IconText'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memoriable  
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
                <Button type="link" href="/terms">
                  Term & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:support@staycation.id">
                  support@staycation.id
                </Button>
                <Button isExternal type="link" href="tel:+62122881996">
                  021 - 2288 - 1996
                </Button>
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
          Copyright 2020 • All right reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
