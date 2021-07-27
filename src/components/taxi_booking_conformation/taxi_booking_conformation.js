import React from "react";

import "./taxi_booking_conformation.css";

import { Link } from "react-router-dom";

function taxi_booking_conformation() {
  return (
    <div>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Conformation</h2>
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
                  <div class="conformation_vehicle_detail">
                    <h2>Vehicle Detail</h2>
                    <div class="booking_page_one_car_selection">
                      <div class="booking_page_one_car_detail">
                        <div class="booking_page_one_single_car_detail">
                          <figure>
                            <img src="assets/image/standard.png" alt="" />
                          </figure>
                          <div class="page_one_single_car_detail">
                            <h1>Standard</h1>
                            <span>
                              <i class="fas fa-user"></i>
                              <small>4 Paks</small>
                            </span>
                            <span>
                              <i class="fas fa-suitcase-rolling"></i>{" "}
                              <small>4 Bags</small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="booking_page_one_car_detail">
                        <div class="booking_page_one_car_price_detail">
                          <strong>Total Price</strong>
                          <strong>$100</strong>
                          <small>Free Cancelation</small>
                          <small>No Hidden Charges</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="page_three_payment_method">
                    <h2>Payment Method</h2>
                    <span>
                      <i class="fab fa-cc-stripe"></i>
                    </span>
                  </div>
                  <div class="conformation_term_section">
                    <h2>Terms & Condition</h2>
                    <div class="conformation_term_field">
                      <input type="checkbox" />
                      <label>
                        {" "}
                        I accept the <a href="#1">
                          Terms & Conditions
                        </a> and <a href="#1">Privacy Policy.</a>{" "}
                      </label>
                    </div>
                  </div>
                </form>

                <div class="page_three_continuous_btn">
                  <div class="back">
                    <Link to="/taxi_booking_page_three">
                      Enter contact Detail
                    </Link>
                  </div>
                  <div class="next">
                    <Link to="/taxi_booking_checkout">Pay ammount ($100)</Link>
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
export default taxi_booking_conformation;
