class AddReservationRefToCabins < ActiveRecord::Migration[5.2]
  def change
    add_reference :cabins, :reservations, foreign_key: true
  end
end
