class CreateCabins < ActiveRecord::Migration[5.2]
  def change
    create_table :cabins do |t|
      t.integer :beds
      t.integer :baths
      t.boolean :suite
      t.boolean :pets
      t.integer :max_occupancy

      t.timestamps
    end
  end
end
