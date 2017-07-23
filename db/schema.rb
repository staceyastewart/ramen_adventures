# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170723165207) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.integer  "posts_id"
    t.integer  "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["posts_id"], name: "index_comments_on_posts_id", using: :btree
    t.index ["users_id"], name: "index_comments_on_users_id", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.string   "link"
    t.integer  "posts_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["posts_id"], name: "index_photos_on_posts_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "content"
    t.string   "date"
    t.integer  "shops_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shops_id"], name: "index_posts_on_shops_id", using: :btree
  end

  create_table "shops", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.boolean  "recommended"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "first_name",                          null: false
    t.string   "last_name",                           null: false
    t.string   "username",                            null: false
    t.string   "city"
    t.string   "country"
    t.string   "postcode"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "usershops", force: :cascade do |t|
    t.integer  "users_id"
    t.integer  "shops_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shops_id"], name: "index_usershops_on_shops_id", using: :btree
    t.index ["users_id"], name: "index_usershops_on_users_id", using: :btree
  end

  add_foreign_key "comments", "posts", column: "posts_id"
  add_foreign_key "comments", "users", column: "users_id"
  add_foreign_key "photos", "posts", column: "posts_id"
  add_foreign_key "posts", "shops", column: "shops_id"
  add_foreign_key "usershops", "shops", column: "shops_id"
  add_foreign_key "usershops", "users", column: "users_id"
end
