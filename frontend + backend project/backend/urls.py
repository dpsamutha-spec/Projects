from rest_framework.routers import DefaultRouter
from .views import EventViewSet,BookingViewSet

router = DefaultRouter()
router.register('events',EventViewSet)
router.register('bookings',BookingViewSet)
urlpatterns = router.urls

