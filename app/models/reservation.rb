class Reservation < ApplicationRecord
  belongs_to :cabin

  def self.find_reservations(id)
    find_by_sql(["
      SELECT * FROM reservations WHERE (cabin_id > 0) 
    ", id] )
  end

end
