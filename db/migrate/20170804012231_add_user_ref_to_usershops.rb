class AddUserRefToUsershops < ActiveRecord::Migration[5.0]
  def change
    add_reference :usershops, :user, foreign_key: true
  end
end
