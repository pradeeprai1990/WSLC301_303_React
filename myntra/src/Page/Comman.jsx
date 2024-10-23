import React from 'react'
import Header from './Header'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import '../Custom.css';
import Footer from './Footer';

export default function Comman() {
  return (
    <>
      <Header />
      <Container fluid>
        <div className='breadcrumbs-base'>
          <ul>
            <li>Home</li>/
            <li>Clothing</li>/
            <li><strong>Men T-shirts</strong></li>
          </ul>
        </div>
        <div className='item'>
          <p><strong>Men T-shirts</strong></p>&nbsp;-<span> 126446 items</span>
        </div>
      </Container>

      <Container fluid>
        <Row>
          <div className='categories-text col-lg-2'>

            <ul>
              <li>FILTERS</li>
              <li>CLEAR ALL</li>
            </ul>
          </div>

          <div className='col-lg-9 d-flex justify-content-between'>
       
            <div></div>
            <Dropdown>
              <DropdownButton
          align={{ lg: 'end' }}
          title="Sort by : Recommended"
          id="dropdown-menu-align-responsive-1"
          className="sort_button"
        >

              
                <Dropdown.Item>Name :  A to Z</Dropdown.Item>
                <Dropdown.Item>Name : Z to A</Dropdown.Item>
                <Dropdown.Item>Price : Low to High</Dropdown.Item>
                <Dropdown.Item>Price : High to Low</Dropdown.Item>
                <Dropdown.Item>Discounted Price : Low to High</Dropdown.Item>
                <Dropdown.Item>Discounted Price : High to Low</Dropdown.Item>
                <Dropdown.Item>Rating : Low to High</Dropdown.Item>
                <Dropdown.Item>Rating : High to Low</Dropdown.Item>
            
              </DropdownButton>
            </Dropdown>
           
          </div>
        </Row>
      </Container>

      <Container fluid className='lift_sidebar pb-3'>
        <Row className='products_container'>
          <Col className='categories' lg={2}>

            <div className='cat_items'>
              <h2>categories</h2>
              <ul>
                <li><input type='checkbox' />Tshirts<span className='item_count'>(125464)</span></li>
                <li><input type='checkbox' />Lounge Tshirts<span className='item_count'>(990)</span></li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>BRAND</h2>
              <ul>
                <li><input type='checkbox' />Roadster<span className='item_count'>(3529)</span></li>
                <li><input type='checkbox' />Friskers<span className='item_count'>(2677)</span></li>
                <li><input type='checkbox' />WROGN<span className='item_count'>(2315)</span></li>
                <li><input type='checkbox' />Tommy Hilfiger<span className='item_count'>(2240)</span></li>
                <li><input type='checkbox' />HRX by Hrithik Roshan<span className='item_count'>(2191)</span></li>
                <li><input type='checkbox' />VIMAL JONNEY<span className='item_count'>(1818)</span></li>
                <li><input type='checkbox' />Jack & Jones<span className='item_count'>(1704)</span></li>
                <li><input type='checkbox' />U.S. Polo Assn.<span className='item_count'>(1623)</span></li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>PRICE</h2>
              <ul>
                <li><input type='checkbox' />Rs. 314 to Rs. 736<span className='item_count'>(1795)</span></li>
                <li><input type='checkbox' />Rs. 736 to Rs. 1158<span className='item_count'>(445)</span></li>
                <li><input type='checkbox' />Rs. 1158 to Rs. 1580<span className='item_count'>(50)</span></li>
                <li><input type='checkbox' />Rs. 1580 to Rs. 2002<span className='item_count'>(24)</span></li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>DISCOUNT RANGE</h2>
              <ul>
                <li><input type='radio' />30% and above</li>
                <li><input type='radio' />40% and above</li>
                <li><input type='radio' />50% and above</li>
                <li><input type='radio' />60% and above</li>
              </ul>
            </div>

            <div className='cat_items'>
              <h2>COLOR</h2>
              <ul>
                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "black" }}>
                  </span>Black<span className='item_count'>(275)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(0, 116, 217)" }}>
                  </span>Blue<span className='item_count'>(246)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "white" }}>
                  </span>White<span className='item_count'>(227)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(60, 68, 119)" }}>
                  </span>Navy Blue<span className='item_count'>(198)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(234, 220, 50)" }}>
                  </span>Yellow<span className='item_count'>(104)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(94, 177, 96)" }}>
                  </span>Green <span className='item_count'>(83)</span>
                </li>

                <li>
                  <input type='radio' />
                  <span data-colorhex="pink" class="colour-colorDisplay" style={{ backgroundColor: "rgb(241, 169, 196)" }}>
                  </span>Pink <span className='item_count'>(80)</span>
                </li>

              </ul>
            </div>




          </Col>



          <Col lg={10} style={{ backgroundColor: "#fafafa" }}>
            <Row className='row row-cols-6'>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card >
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card >
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='product_items py-3 m-2'>
                <Card>
                  <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2033115/2019/3/28/aab72ff3-1d51-4ba2-93db-4412c8f2b76c1553750151015-WROGN-Men-Burgundy-Solid-Polo-T-shirt-6511553750150068-1.jpg" />
                  <Card.Body>
                    <Card.Title>WROGN</Card.Title>
                    <Card.Text>
                      <p>Solid Polo Pure Cotton T-shirt</p>
                      <span className='product-discountedPrice'>Rs. 659</span>
                      <span className='product-strike'>Rs. 1499</span>
                      <span className='product-discountPercentage'>(56% OFF)</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>


            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
