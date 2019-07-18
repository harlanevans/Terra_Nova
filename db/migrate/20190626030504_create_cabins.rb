class CreateCabins < ActiveRecord::Migration[5.2]
  def change
    create_table :cabins do |t|
      t.integer :beds
      t.integer :baths
      t.boolean :suite
      t.boolean :pets
      t.integer :max_occupancy
      t.decimal :price
      t.string  :image
      t.string  :description
      # t.belongs_to :reservations, foreign_key: true

      t.timestamps
    end
  end
end
