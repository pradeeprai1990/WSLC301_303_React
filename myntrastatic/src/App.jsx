import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import Header from './common/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function App() {
  let [allCatSlug,setAllcategorslug]=useState([])
  let [allbrandSlug,setAllbrandSlug]=useState([])
  let [sorting,setSorting]=useState(null)
  let [rating,setRating]=useState(null)
  let [priceFilter,setPriceFilter]=useState(['',''])

  let [category, setCatgory] = useState([])
  let [brand, setBrand] = useState([])
  let [product, setProduct] = useState([])
  let getCategory = () => {
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        setCatgory(finalRes.data)
      })
  }

  let getBrand = () => {
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
      .then((res) => res.data)
      .then((finalRes) => {
        setBrand(finalRes.data)
      })
  }

  let getProduct = () => {
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {

      params: {
        page: 1,
        limit: 30,
        categories:allCatSlug.toString(),
        brands: allbrandSlug.toString(),
        price_from: priceFilter[0],
        price_to: priceFilter[1],
        discount_from: '',
        discount_to: '',
        rating:rating,
        sorting
      }

    })
      .then((res) => res.data)
      .then((finalRes) => {
        setProduct(finalRes.data)
      })
  }

  useEffect(() => {
    getCategory()
    getBrand()

  }, [])

  useEffect(() => {
    getProduct()
  }, [allCatSlug,allbrandSlug,sorting,priceFilter,rating])

  
 
  let getCategoryslug=(event)=>{
      if(event.target.checked){
        if(! allCatSlug.includes(event.target.value)){
          setAllcategorslug([...allCatSlug,event.target.value])
        }
       
        
      }
      else{

        let filterData=allCatSlug.filter((items)=>items!=event.target.value)
        
        setAllcategorslug(filterData)
      }

  }



  let getallBrandSlug=(event)=>{
     if(event.target.checked){
          if(!allbrandSlug.includes(event.target.value)){
             setAllbrandSlug([...allbrandSlug,event.target.value])
          }
     }
     else{
        let removeUcheckbrandslug=allbrandSlug.filter((items)=>items!=event.target.value)
        setAllbrandSlug(removeUcheckbrandslug)
    
      }


  }
  // useEffect(()=>{
  //     console.log(allCatSlug)
  // },[allCatSlug])


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


                <Dropdown.Item onClick={()=>setSorting(1)}>Name :  A to Z</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(2)}>Name : Z to A</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(3)}> Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(4)}>Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(5)}>Discounted Price : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(6)}>Discounted Price : High to Low</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(7)}>Rating : Low to High</Dropdown.Item>
                <Dropdown.Item onClick={()=>setSorting(8)}>Rating : High to Low</Dropdown.Item>

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
                {category.length >= 1 ?
                  category.map((items, index) => {

                    return (
                      <li><input type='checkbox' onChange={getCategoryslug} value={items.slug} />{items.name}<span className='item_count'></span></li>
                    )
                  })
                  :
                  <li>No Category</li>
                }


              </ul>
            </div>

            <div className='cat_items'>
              <h2>BRAND</h2>
              <ul>

                {brand.length >= 1 ?
                  brand.map((items, index) => {

                    return (
                      <li><input onChange={getallBrandSlug} type='checkbox' value={items.slug} />{items.name}<span className='item_count'></span></li>
                    )
                  })
                  :
                  <li>No brand</li>
                }



              </ul>
            </div>

            <div className='cat_items'>
              <h2>PRICE</h2>
                <ul>
                  <li><label><input type="radio" name="money" onChange={()=>setPriceFilter([10,250])}/>Rs. 10 to Rs. 250</label></li>
                  <li><label><input type="radio" name="money" onChange={()=>setPriceFilter([250,500])}/>Rs. 250 to Rs. 500</label></li>
                  <li><label><input type="radio" name="money" onChange={()=>setPriceFilter([500,1000])} />Rs. 500 to Rs. 1000</label></li>
                  <li><label><input type="radio" name="money" onChange={()=>setPriceFilter([1000,''])}/>Rs. 1000 to Above</label></li>
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

            <div class="cat_items">
              <h2>Rating</h2>
              <ul>
                <li class="pointer">
                  <label><input type="radio" name="rating" onClick={()=>setRating(4)}/>4★ &amp; above</label>
                  </li>
                  <li class="pointer">
                    <label>
                      <input type="radio" name="rating" onClick={()=>setRating(3)}/>
                      3★ &amp; above</label></li>

                      <li class="pointer"><label><input type="radio" name="rating" onClick={()=>setRating(2)}/>2★ &amp; above</label></li>
                      
                      
                      <li class="pointer"><label><input type="radio" name="rating" onClick={()=>setRating(1)}/>1★ &amp; above</label></li></ul></div>



          </Col>



          <Col lg={10} style={{ backgroundColor: "#fafafa" }}>
            <Row className='row row-cols-4'>

              {product.length >= 1 ?
                product.map((items, index) => {
                  let { name, image, description, price } = items;
                  return (
                    <Col>
                      <div className='product_items py-3 m-2'>
                        <Card>
                          <Card.Img variant="top" src={image} />
                          <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                              <p>{description}</p>
                              <span className='product-discountedPrice'>Rs. {price}</span>
                              
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>

                  )
                })
                :
                ''

              }








            </Row>
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default App
