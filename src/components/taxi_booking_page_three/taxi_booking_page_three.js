import React from "react";

import "./taxi_booking_page_three.css";

import { Link } from "react-router-dom";

function taxi_booking_page_three() {
  return (
    <div>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Personal Detail</h2>
            <div class="page_one_vehical">
              <div class="page_one_section">
                <a class="booking_page_one_hep" href="#1">
                  <div class="booking_page_one_hepcenter">
                    <span>
                      <i class="fas fa-info-circle"></i>
                    </span>
                    <span>
                      <h3>Help center</h3>
                      <small>Frequently Asked Questions</small>
                    </span>
                  </div>
                </a>

                <div class="booking_page_one_route_detail">
                  <h2>Routing Detail</h2>
                  <div class="route_detail">
                    <span>Mallorca airport (PMI)</span>
                    <span>to</span>
                    <span>Alcúdia</span>
                  </div>
                  <div class="journy_distance">
                    <h3>Journey distance: </h3>
                    <span>61 km</span>
                  </div>
                  <div class="estimated_journy_time">
                    <h3>Estimated journey time:</h3>
                    <span>61 min</span>
                  </div>
                </div>

                <div class="booking_page_one_price_detail">
                  <h2>Price Detail</h2>
                  <div class="booking_page_one_total_price">
                    <h3>Select Vehicle</h3>
                    <span>$100</span>
                  </div>
                  <div class="booking_page_one_total_price total_price_border">
                    <h3>Select Extra</h3>
                    <span>$100</span>
                  </div>
                  <div class="booking_page_one_total_price">
                    <h3>Total Price</h3>
                    <span>$100</span>
                  </div>
                </div>
              </div>
              <div class="page_three_section_two">
                <form>
                  <div class="page_three_contact_detail">
                    <div class="page_three_contact_header">
                      <h4>Contact Detail</h4>
                    </div>
                    <div class="page_three_personal_detail">
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="First Name*" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="Last Name*" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="email" Placeholder="Email Address*" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="number" Placeholder="Phone Number*" />
                      </div>
                    </div>
                    <div class="personal_detail_comment">
                      <input type="text" Placeholder="Comment" />
                    </div>
                  </div>

                  <div class="page_three_contact_detail">
                    <div class="page_three_contact_header">
                      <h4>Other Trip Detail</h4>
                    </div>
                    <div class="page_three_personal_detail">
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="Pickup Flight #" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="Return Flight #" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="# Of Pax *" />
                      </div>
                      <div class="personal_detail_fields">
                        <input type="text" Placeholder="# Of Bags *" />
                      </div>
                    </div>
                  </div>
                </form>

                <div class="page_three_payment_method">
                  <h2>Choose Payment Method</h2>
                  <span>
                    <i class="fab fa-cc-stripe"></i>
                  </span>
                </div>

                <div class="page_three_continuous_btn">
                  <div class="back">
                    <Link to="/taxi_booking_page_two">Choose Extra Detail</Link>
                  </div>
                  <div class="next">
                    <Link to="/taxi_booking_conformation">Confirm order</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default taxi_booking_page_three;
