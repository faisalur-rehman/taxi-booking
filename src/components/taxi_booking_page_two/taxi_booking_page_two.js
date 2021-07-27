import React from "react";

import "./taxi_booking_page_two.css";

import { Link } from "react-router-dom";

function taxi_booking_page_two() {
  return (
    <div>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Extra</h2>
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

              <div class="page_two_section_two">
                <form>
                  <div class="page_two_extra_detail">
                    <div class="page_two_extra">
                      <span>
                        <h2>Red Stripe Beer (4 pack) </h2>
                        <strong>$20 </strong>
                      </span>
                      <small>
                        4 Red Stripe Beers served inside the vehicle{" "}
                      </small>
                    </div>
                    <div class="page_two_extra_quantity">
                      <span>
                        <i class="far fa-plus-square"></i>
                        <i class="far fa-minus-square"></i>
                      </span>
                      <strong>10</strong>
                    </div>
                    <div class="extra_select_btn">
                      <button>Select</button>
                    </div>
                  </div>

                  <div class="page_two_extra_detail">
                    <div class="page_two_extra">
                      <span>
                        <h2>Champagne + 2 Flutes </h2>
                        <strong>$60</strong>
                      </span>
                      <small>Bottle of chilled Champagne + 2 flutes </small>
                    </div>
                    <div class="page_two_extra_quantity">
                      <span>
                        <i class="far fa-plus-square"></i>
                        <i class="far fa-minus-square"></i>
                      </span>
                      <strong>10</strong>
                    </div>
                    <div class="extra_select_btn">
                      <button>Select</button>
                    </div>
                  </div>

                  <div class="page_two_extra_detail_parttwo">
                    <div class="page_two_extra">
                      <span>
                        <h2>En-route Jerk Stop </h2>
                        <strong>$30 </strong>
                      </span>
                      <small>30 minute stop en-route for any reason. </small>
                    </div>
                    <div class="extra_select_btn">
                      <button>Select</button>
                    </div>
                  </div>

                  <div class="page_two_extra_detail_parttwo">
                    <div class="page_two_extra">
                      <span>
                        <h2>Bouquet of Flowers </h2>
                        <strong>$65 </strong>
                      </span>
                      <small>30 minute stop en-route for any reason. </small>
                    </div>
                    <div class="extra_select_btn">
                      <button>Select</button>
                    </div>
                  </div>
                </form>

                <div class="continuous_btn">
                  <div class="back">
                    <Link to="/taxi_booking_page_one">Choose Ride Detail</Link>
                  </div>
                  <div class="next">
                    <Link to="/taxi_booking_page_three">
                      Enter contact Detail
                    </Link>
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
export default taxi_booking_page_two;
