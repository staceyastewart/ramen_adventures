class AddFieldsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :username, :string, null: false, unique: true
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :postcode, :string
  end
end
