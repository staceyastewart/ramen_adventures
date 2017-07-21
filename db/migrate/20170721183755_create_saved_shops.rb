class CreateSavedShops < ActiveRecord::Migration[5.0]
  def change
    create_table :saved_shops do |t|
      t.references :users, foreign_key: true
      t.references :shops, foreign_key: true

      t.timestamps
    end
  end
end
