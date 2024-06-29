import React from 'react'


const CardContainer = ({ filterdata }) => {

  return (
    <>
      <div className='container-fluid cont'>
        <div className='row'>
          {
            filterdata.map((data) => (
              <div className='col col-md-3' key={data.id}>
                <div className='card mb-4'>
                  <img src={data.image} className='img-fluid' />
                  <div className='imgcontbg'>
                    <p>{data.name.length <= 20 ? data.name : data.name.slice(0, 15)}</p>
                    <p>id:{data.id}</p>
                    <p>created:{data.created}</p>
                  </div>


                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <span>STATUS </span>
                      <p>{data.status}</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <span>SPECES</span>
                      <p>{data.status}</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <span>GENDER</span>
                      <p>{data.gender}</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <span>ORIGIN</span>
                      <p>{data.origin.name.slice(0, 15)}</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <span>LAST LOCATION</span>
                      <p> {`${data.location.name.length <= 20 ? data.location.name : `${data.location.name.slice(0, 15)}...`}`}</p>
                      {/* <span>{read ? 'showmore':'Readmore'}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </div>




    </>
  )
}

export default CardContainer
