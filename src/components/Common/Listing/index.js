import React, {useEffect, useState} from 'react';

import { Table, Row, Col, Pagination, Select } from 'antd';

import { LISTING_DATA } from '../../../constants/General';

function Listing({
  loading,
  columns,
  dataSource,
  heading,
  totalRecords,
  getList,
  handleFilterChange,
  defaultValueFilter,
  filterOptions,
  filterByText
}){

  const [currentPage, setCurrentPage] = useState(1);

  return(
    <div className='tableScreen'>

      {/* header */}
      <Row>
        <Col lg={24}>
          <h1>{heading}</h1>
        </Col>
      </Row>

      {/* Filter */}
      <Row>
        <Col lg={24}>
          <span>{'Filter by: '}</span> 
          <Select       
            bordered={false}
            style={{ width: 115,}}
            defaultValue="Status"
            onChange={handleFilterChange}
            options={filterOptions}
          />
        </Col> 
      </Row>


      {/* Table */}
      <Row>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          loading={loading}
        />

        {
          totalRecords>LISTING_DATA.PAGE_SIZE && 
          <div className='paginationClass'>
            <Pagination  
              showSizeChanger={false}
              total={Math.ceil((totalRecords/LISTING_DATA.PAGE_SIZE)* 10)}  
              onChange={(pg)=>{
                getList(pg);
                setCurrentPage(pg)
              }}
            />

            <center>
              {(currentPage*LISTING_DATA.PAGE_SIZE - LISTING_DATA.PAGE_SIZE + 1) 
              + ' - ' + 
              currentPage*LISTING_DATA.PAGE_SIZE
               + ' of ' + totalRecords}
            </center>
           
          </div>
          
        }

      </Row>
     
    </div>
  )

}
export default Listing