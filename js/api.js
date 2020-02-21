
let request = new XMLHttpRequest();
request.open('GET', 'https://developers.zomato.com/api/v2.1/geocode?lat=37.7749300&lon=%20-122.4194200&apikey=2b90e7e5f375c0c18ee334603679fa43', true,)
request.send();
request.onload = () =>{
  var compact = JSON.parse(request.response);
  var restaurants  = compact.nearby_restaurants;

  for(var k in restaurants) {
    console.log(restaurants[k].restaurant);
    document.getElementById("restaurants").innerHTML +=  "<div class='container ad'><div class='row'><div class='col-md-3'><img style='margin-top: 6%;' src='"+restaurants[k].restaurant.featured_image+"' height='160px' width='160px'></div><div class='col-md-7 info-col'><h2>"+restaurants[k].restaurant.name+"</h2><p class='info'>"+restaurants[k].restaurant.location.locality+" &middot <span> Casual Dining</span></p><p style='color:#28a745'>Open now <span style='color:#dc3545'> &middot "+restaurants[k].restaurant.cuisines+"</span><span style='color:#545b62'> &middot Costs $"+restaurants[k].restaurant.average_cost_for_two+" for two</span></p></div><div class='col-md-2 green-col'><div class='green'><p>"+restaurants[k].restaurant.user_rating.aggregate_rating+" <span class='of'>/5</span></p></div><p class='votes'>"+restaurants[k].restaurant.user_rating.votes+" votes</p></div></div></div>"
 }
}