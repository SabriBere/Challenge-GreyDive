import { Flex, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";

const HomeCardsSkeleton = () => {
  return (
    <Grid templateColumns="repeat(4, 2fr)" gap={6} width="50%" margin="auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <Flex
          key={index}
          width="300px"
          height="250px"
          bg="cards"
          borderRadius="0.5rem"
          boxShadow="0px 5px 10px 0px #000"
          flexDirection="column"
          padding="20px"
        >
          <Skeleton height="48px" width="70%" margin="0 auto" startColor="gray.500" />
          <SkeletonText
            marginTop="40px"
            noOfLines={3}
            spacing="4"
            skeletonHeight="3"
            startColor="gray.500"
          />
          <Skeleton height="32px" width="80px" margin="auto auto 0" startColor="gray.500" />
        </Flex>
      ))}
    </Grid>
  );
};

export default HomeCardsSkeleton;
