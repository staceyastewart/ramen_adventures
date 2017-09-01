class AddMapToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :map, :string
  end
end
