@beds = [1, 2]
@boolean = [true, false]
@baths = [1, 2]
@max_occupancy = [5, 6, 7, 8, 9, 10]
@price = [199.99, 149.99, 239.99, 169.99]
@description = ["Located in the heart of Yellowstone with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.", "Canyon Lodge inside Yellowstone Close to the Grand Canyon of the Yellowstone. Canyon Lodge is a great home base for your park explorations offering a mix of cabins and newer lodge rooms for your individual or family needs."]
@image = ['https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80',
'https://images.unsplash.com/photo-1506242612608-3f589775498a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
'https://images.unsplash.com/photo-1506242612608-3f589775498a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80',
'https://images.unsplash.com/photo-1540520372776-d95dc8d21610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
'https://images.unsplash.com/photo-1548929374-a07f6b89de57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExNjMwfQ&auto=format&fit=crop&w=934&q=80']

6.times do 
      @cabin = Cabin.create(
      beds: @beds.sample,
      baths: @baths.sample,
      suite: false,
      pets: true,
      max_occupancy: @max_occupancy.sample,
      price: @price.sample,
      description: @description.sample,
      image: @image.sample

  )
  2.times do
  Reservation.create(
    adults: 2,
    kids: 1,
    start_date: "2019-07-16",
    end_date: "2019-07-30",
    rooms: '2',
    cabin_id: @cabin.id
      )
end
end

