require 'gibbon'

class LandingController < ApplicationController
  def index
  end

  def submit
    mailchimp_api_key = ENV['MAILCHIMP_KEY']
    mailchimp_list_id = ENV['MAILCHIMP_LIST']
    _gibbon = Gibbon::API.new(mailchimp_api_key)

    @email = params[:email]

    response = _gibbon.lists.subscribe({
                                        :id => mailchimp_list_id,
                                        :email => params[:email],
                                        :double_optin => false,
                                        :send_welcome => true,
                                        :FNAME => params[:fname],
                                        :LNAME => params[:lname]
                                      })

    render json: response
  end
end
