class AddIndexTokenToUsers < ActiveRecord::Migration[5.0]
  def change
      add_index :users, :auth_token
  end
end
