import React from 'react'
import Row from '../row/Row'
import requests from '../../../utiles/requests'


const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRateMovies}
        
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <Row
        title="Documentary"
        fetchUrl={requests.fetchDocumentaryMovies}
       
      />
      <Row title="TV Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowList