require 'test_helper'

class SitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @site = sites(:one)
  end

  test "should show site" do
    get site_url(@site), as: :json
    assert_response :success
  end

  test "should update site" do
    patch site_url(@site), params: { site: { name: @site.name, url: @site.url } }, as: :json
    assert_response 200
  end

  test "should destroy site" do
    assert_difference('Site.count', -1) do
      delete site_url(@site), as: :json
    end

    assert_response 204
  end
end
