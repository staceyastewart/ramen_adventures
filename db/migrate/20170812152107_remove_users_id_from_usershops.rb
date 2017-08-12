class RemoveUsersIdFromUsershops < ActiveRecord::Migration[5.0]
  def change
      remove_reference :usershops, :users, foreign_key: true
  end
end
