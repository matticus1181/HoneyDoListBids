HoneyDoListBids::Application.routes.draw do
  get "landing/index"
  post "landing/submit"
  get "landing/submit"

  root to: 'landing#index'
end
