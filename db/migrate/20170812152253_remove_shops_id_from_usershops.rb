class RemoveShopsIdFromUsershops < ActiveRecord::Migration[5.0]
  def change
      remove_reference :usershops, :shops, foreign_key: true
  end
end
