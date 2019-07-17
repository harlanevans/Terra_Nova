class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :adults
      t.integer :kids
      t.string :start_date
      t.string :end_date
      t.string :rooms
      t.belongs_to :cabin, foreign_key: true

      t.timestamps
    end
  end
end
