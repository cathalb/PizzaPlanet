/**
 * Created by cathal on 13/08/15.
 */
app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
        {
            name: 'Caprese',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Mozzarella Sticks',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Bruschetta',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
        }

    ];

    $scope.mains = [
        {
            name: 'Pan fried Fillet Sea bass',
            description: 'Pan fried sea bass wrapped in Parma ham glazed with a tomato & garlic salsa. Served with grilled vegetables & roasted baby potatoes with rosemary.',
            price: 18.95
        },
        {
            name: 'Atlantic Salmon',
            description: 'Oven baked Irish Salmon presented on a bed of creamy mash mixed together with sautéed green cabbage, Italian pancetta & red wine jus.',
            price: 18.95
        },
        {
            name: 'Cote de Boeuf',
            description: '28 day aged Rib Eye steak grilled as you like, served with saffron potatoes, wild broccoli and a red wine jus.',
            price: 28.95
        }
    ];

}]);