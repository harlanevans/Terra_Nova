@beds = [1, 2]
@boolean = [true, false]
@baths = [1, 2]
@max_occupancy = [5, 6, 7, 8, 9, 10]

5.times do
  Cabin.create(
    beds: @beds.sample,
    baths: @baths.sample,
    suite: false,
    pets: true,
    max_occupancy: @max_occupancy.sample
  )
end

