class Todo < ApplicationRecord
  validates :title, :measure, :deadline, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  
end
