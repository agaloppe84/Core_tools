class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :mobile]

  def home
  end

  def mobile
  end
end
