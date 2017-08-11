class RemoveDupeUserIdComments < ActiveRecord::Migration[5.0]
  def change
        remove_reference :comments, :users, foreign_key: true
  end
end
