class CreateShops < ActiveRecord::Migration[5.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :address
      t.boolean :recommended

      t.timestamps
      t.timestamps
    end
  end
end
