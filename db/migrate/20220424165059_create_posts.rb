class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :content
      t.integer :Xpos
      t.integer :Ypos

      t.timestamps
    end
  end
end
