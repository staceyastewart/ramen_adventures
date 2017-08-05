class RenamePostsIdInComments < ActiveRecord::Migration[5.0]
  def change
        remove_reference :comments, :posts, foreign_key: true
  end
end
