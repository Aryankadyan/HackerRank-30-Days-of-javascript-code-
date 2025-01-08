static class TestDataEmptyArray{
        public static int[] get_array(){
            return new int[0];
        }
    }
    static class TestDataUniqueValues{
        public static int[] get_array(){
            return new int[]{11,8,9,3,7,86,15};
        }
        public static int get_expected_result(){
            return 3;
        }
    }
    static class TestDataExactlyTwoDifferentMinimums{
        public static int[] get_array(){
            return new int[]{17,11,455,66,87,16,11};      
        }
        public static int get_expected_result(){
            return 1;
        }
        
    }
