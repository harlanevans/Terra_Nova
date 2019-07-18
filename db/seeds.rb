@beds = [1, 2]
@boolean = [true, false]
@baths = [1, 2]
@max_occupancy = [5, 6, 7, 8, 9, 10]


5.times do 
      @cabin = Cabin.create(
      beds: @beds.sample,
      baths: @baths.sample,
      suite: false,
      pets: true,
      max_occupancy: @max_occupancy.sample

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
