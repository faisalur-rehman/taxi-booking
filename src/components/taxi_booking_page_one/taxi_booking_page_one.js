import React from "react";

import { Link } from "react-router-dom";

function taxi_booking_page_one() {
  return (
    <div>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Vehicle</h2>
            <div class="page_one_vehical">
              <div class="page_one_section">
                <form>
                  <div class="airport_option">
                    <div class="airport_direction">
                      <input type="radio" name="airport_ditrection" />
                      <label>From the Airport</label>
                    </div>
                    <div class="airport_direction">
                      <input type="radio" name="airport_ditrection" />
                      <label>To the Airport</label>
                    </div>
                  </div>

                  <div class="airport_selection_fileds">
                    <div class="airport_fileds">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <div class="air_input">
                        <span>Departure Airport</span>
                        <input
                          type="location"
                          placeholder="Departure Airport"
                        />
                      </div>
                    </div>

                    <div class="airport_fileds airport_fileds_border">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <div class="air_input">
                        <span>pickup Location</span>
                        <input type="location" placeholder="pickup Location" />
                      </div>
                    </div>

                    <div class="airport_fileds">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Flight Departure</span>
                        <input type="date" placeholder="Flight Departure" />
                      </div>
                    </div>

                    <div class="airport_fileds ">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Add Return</span>
                        <input type="date" placeholder="Add Return" />
                      </div>
                    </div>

                    <div class="airport_fileds_checkbox airport_fileds_border">
                      <input type="checkbox" />
                      <label>Only one way</label>
                    </div>

                    <div class="airport_fileds">
                      <span>
                        <i class="fas fa-user"></i>
                      </span>
                      <div class="air_input">
                        <span>Passengers</span>
                        <div class="page_one_Passengers">
                          <h5>
                            <span>0</span>
                            <span>children</span>
                          </h5>
                          <h5>
                            <span>0</span>
                            <span>Adult</span>
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="booking_page_one_btn">
                      <button type="submit">Order Taxi</button>
                    </div>
                  </div>
                </form>

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
                  <div class="booking_page_one_total_price total_price_border">
                    <h3>Select Vehicle</h3>
                    <span>$100</span>
                  </div>
                  <div class="booking_page_one_total_price">
                    <h3>Total Price</h3>
                    <span>$100</span>
                  </div>
                </div>
              </div>
              <div class="page_one_section_two">
                <form>
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
                          <span>
                            <i
                              id="single_car_more"
                              class="fas fa-chevron-down"
                            ></i>
                            <small>More Info</small>
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
                        <button>Select</button>
                      </div>
                    </div>
                  </div>

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
                          <span>
                            <i
                              id="single_car_more"
                              class="fas fa-chevron-down"
                            ></i>
                            <small>More Info</small>
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
                        <button>Select</button>
                      </div>
                    </div>
                  </div>

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
                          <span>
                            <i
                              id="single_car_more"
                              class="fas fa-chevron-down"
                            ></i>
                            <small>More Info</small>
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
                        <button>Select</button>
                      </div>
                    </div>
                  </div>

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
                          <span>
                            <i
                              id="single_car_more"
                              class="fas fa-chevron-down"
                            ></i>
                            <small>More Info</small>
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
                        <button>Select</button>
                      </div>
                    </div>
                  </div>

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
                          <span>
                            <i
                              id="single_car_more"
                              class="fas fa-chevron-down"
                            ></i>
                            <small>More Info</small>
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
                        <button>Select</button>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="page_one_continous_btn">
                  <Link to="/taxi_booking_page_two">Enter Extra Detail</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default taxi_booking_page_one;
