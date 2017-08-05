class RemovePostcodeFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :postcode
  end
end
