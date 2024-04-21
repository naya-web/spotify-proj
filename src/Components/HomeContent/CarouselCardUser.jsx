import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CarouselCardUser({ data }) {
  const slicedData = data.slice(0, 9);

  // Helper function to group every 3 items into a new array
  const groupItems = (array, cur, index) => {
   const groupIndex = Math.floor(index / 3);
   if (!array[groupIndex]) array[groupIndex] = [];
   array[groupIndex].push(cur);
   return array;
  };
  
  // Use reduce to group items into groups of 3
  const groupedItems = slicedData.reduce(groupItems, []);
 return (
    <Carousel slide={false} interval={100000} data-bs-theme="dark" style={{paddingInline:"5rem"}}>
      {groupedItems.map((group, index) => (
        <Carousel.Item key={index} >
          <div style={{ display: "flex", justifyContent: "center"}}>
            {group.map((item, itemIndex) => (
              <Card key={itemIndex} style={{ width: '14rem' , height:'340px', marginBlockEnd:'5rem', marginInline:"1rem" }}>
                <Card.Img variant="top" src={item.path} style={{height:'120px'}} />
                <Card.Body style={{display: "grid"}}>
                 <Card.Title style={{  color:"aquamarine" }}>
                  {item.master_metadata_track_name}
                  </Card.Title>
                    <Card.Subtitle style={{padding:"5px"}}>{item.master_metadata_album_artist_name}
                    </Card.Subtitle>
                    <Card.Subtitle style={{padding:"5px"}}>{item.master_metadata_album_album_name}
                    </Card.Subtitle>
                 <Button variant="primary" style={{marginBlockStart:'10px',height:'50px'}}>Play</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
 );
}

export default CarouselCardUser;
