import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import medusa from "assets/img/cardimgfree.png";
import medBg from "../../assets/img/avatars/avatar7.png";
import Banco2 from "../../assets/img/Fondos/Banco1.jpg";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import { RiMastercardFill } from "react-icons/ri";

// Tables
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React from "react";
// Styles for the circular bar
import { AiFillCheckCircle } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
// icons
import { BsArrowLeft } from "react-icons/bs";
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal,
} from "react-icons/io5";
// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "variables/charts";
import { dashboardTableData, timelineData } from "variables/general";

export default function Dashboard() {
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", "2xl": "2fr 1.2fr 1.5fr" }}
        my="26px"
        gap="18px"
      >
        {/* Welcome Card */}
        {/* <Card
          p="0px"
          gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          bgImage={medusa}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <CardBody w="100%" h="100%">
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%" h="100%">
              <Flex
                flexDirection="column"
                h="100%"
                p="22px"
                minW="60%"
                lineHeight="1.6"
              >
                <Text fontSize="sm" color="gray.400" fontWeight="bold">
                  Bienvenido
                </Text>
                <Text fontSize="28px" color="#fff" fontWeight="bold" mb="18px">
                  Obed Hurtado
                </Text>
                <Text
                  fontSize="md"
                  color="gray.400"
                  fontWeight="normal"
                  mb="auto"
                >
                  Perfil <br />
                  Ask me anything.
                </Text>
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Text
                      fontSize="sm"
                      color="#fff"
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .3s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}
                    >
                      Tab to record
                    </Text>
                    <Icon
                      as={BsArrowLeft}
                      w="20px"
                      h="20px"
                      color="#fff"
                      fontSize="2xl"
                      transition="all .3s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(-20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card> */}

        <Card>
          {/* <Flex direction="column">
            <Flex justify="space-between" align="center" mb="40px">
              <img
                src={medBg}
                style={{ height: "200px", width: "200px", borderRadius: "20%" }}
              ></img>
              <Button
                borderRadius="12px"
                w="300px"
                h="38px"
                bg="#22234B"
                _hover="none"
                _active="none"
              >
				<Text color="#fff" fontSize="lg" fontWeight="bold">
                Informaci??n Personal
              </Text>
			  {" -"}
                <Icon as={IoEllipsisHorizontal} color="#7551FF" />
              </Button>
            </Flex>
            <Flex direction={{ sm: "column", md: "row" }}>
              <Flex
                direction="column"
                me={{ md: "6px", lg: "52px" }}
                mb={{ sm: "16px", md: "0px" }}
              >
                <Flex
                  direction="column"
                  p="22px"
                  pe={{ sm: "22e", md: "8px", lg: "22px" }}
                  minW={{ sm: "220px", md: "140px", lg: "220px" }}
                  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                  borderRadius="20px"
                  mb="20px"
                >
                  <Text color="gray.400" fontSize="sm" mb="4px">
                    Nombre:
                  </Text>
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    Jos?? Manuel Salgado Salgado
                  </Text>
                </Flex>

				<Flex
                  direction="column"
                  p="22px"
                  pe={{ sm: "22e", md: "8px", lg: "22px" }}
                  minW={{ sm: "220px", md: "140px", lg: "220px" }}
                  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                  borderRadius="20px"
                  mb="20px"
                >
                  <Text color="gray.400" fontSize="sm" mb="4px">
                    Email:
                  </Text>
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    josesalg@utez.edu.mx
                  </Text>
                </Flex>

                <Flex
                  direction="column"
                  p="22px"
                  pe={{ sm: "22px", md: "8px", lg: "22px" }}
                  minW={{ sm: "170px", md: "140px", lg: "170px" }}
                  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                  borderRadius="20px"
                >
                  <Text color="gray.400" fontSize="sm" mb="4px">
                    Telefono:
                  </Text>
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    7771305580
                  </Text>
                </Flex>
              </Flex>
            </Flex>
			
          </Flex> */}
          <Card>
            <div className="text-center">
              <Button
                borderRadius="12px"
                w="300px"
                h="42px"
                bg="#22234B"
                _hover="none"
                _active="none"
              >
                <Text color="#fff" fontSize="lg" fontWeight="bold">
                  Informaci??n Personal
                </Text>
                {" -"}
                <Icon as={IoEllipsisHorizontal} color="#7551FF" />
              </Button>
            </div>

            <Flex direction="column">
              <Flex justify="space-between" align="center" mb="40px">
                <Flex
                  direction="column"
                  me={{ md: "6px", lg: "52px" }}
                  mb={{ sm: "16px", md: "0px" }}
                >
                  <Flex
                    direction="column"
                    p="22px"
                    pe={{ sm: "22e", md: "8px", lg: "22px" }}
                    minW={{ sm: "220px", md: "140px", lg: "220px" }}
                    bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                    borderRadius="20px"
                    mb="20px"
                  >
					 <Text color="gray.400" fontSize="sm" mb="4px">
                      Nombre:
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      Jos?? Manuel Salgado Salgado
                    </Text>
					<br/>
                    <Text color="gray.400" fontSize="sm" mb="4px">
                      Email:
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      joseManuel@utez.edu.mx
                    </Text>
					<br/>
					<Text color="gray.400" fontSize="sm" mb="4px">
                      Telefono:
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      7771305580
                    </Text>
					<br/>
					<Text color="gray.400" fontSize="sm" mb="4px">
                      Direcci??n:
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      Laurel #1, Col. <i><strong>"La Rivera"</strong></i> Acatlipa, Temixco, Morelos.
                    </Text>
					
                  </Flex>

                  
                </Flex>
                <img
                  src={medBg}
                  style={{
                    height: "220px",
                    width: "220px",
                    borderRadius: "20%",
                  }}
                ></img>
              </Flex>
            </Flex>
          </Card>
		 
        </Card>

        {/* INFORMACI??N DE CUENTA BANCARIA */}
        <Card>
          <Flex direction="column">
            <Flex justify="space-between" align="center" mb="40px">
              <Button
                borderRadius="12px"
                w="400px"
                h="42px"
                bg="#22234B"
                _hover="none"
                _active="none"
              >
                <Text color="#fff" fontSize="lg" fontWeight="bold">
                  Informaci??n de Cuenta Bancaria
                </Text>
                {" -"}
                <Icon as={IoEllipsisHorizontal} color="#7551FF" />
              </Button>
            </Flex>
            {/* MASTERCARD */}
            <Flex direction="column">
              <Card
                backgroundImage={Banco2}
                backgroundRepeat="no-repeat"
                bgSize="cover"
                bgPosition="10%"
                p="16px"
              >
                <CardBody h="100%" w="100%">
                  <Flex
                    direction="column"
                    color="white"
                    h="100%"
                    p="0px 10px 20px 10px"
                    w="100%"
                  >
                    <Flex justify="space-between" align="center">
                      <Text fontSize="md" fontWeight="bold">
                        Banorte
                      </Text>
                      <Icon
                        as={RiMastercardFill}
                        w="48px"
                        h="auto"
                        color="gray.400"
                      />
                    </Flex>
                    <Spacer />
                    <Text fontSize="md" fontWeight="bold">
                      Jos?? Manuel Salgado Salgado
                    </Text>
                    <br />
                    <Flex direction="column">
                      <Box>
                        <Text
                          fontSize={{ sm: "xl", lg: "lg", xl: "xl" }}
                          letterSpacing="2px"
                          fontWeight="bold"
                        >
                          4169 1607 1080 0336
                        </Text>
                      </Box>
                      <Flex mt="14px">
                        <Flex direction="column" me="34px">
                          <Text fontSize="xs">GOOD THRU</Text>
                          <Text fontSize="xs" fontWeight="bold">
                            11/25
                          </Text>
                        </Flex>
                        <Flex direction="column">
                          <Text fontSize="xs">CVV</Text>
                          <Text fontSize="xs" fontWeight="bold">
                            815
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
            </Flex>
            <br />
            <Flex
              direction="column"
              p="22px"
              pe={{ sm: "22e", md: "8px", lg: "22px" }}
              minW={{ sm: "220px", md: "140px", lg: "220px" }}
              bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
              borderRadius="20px"
              mb="20px"
            >
              <Text color="gray.400" fontSize="sm" mb="4px">
                CLABE INTERBANCARIA:
              </Text>
              <Text color="#fff" fontSize="lg" fontWeight="bold">
                XXXX {" - "}XXXX {" - "}XXXX {" - "}XXXX
              </Text>
            </Flex>
            <Flex direction={{ sm: "column", md: "row" }}>
              <Flex
                direction="column"
                me={{ md: "6px", lg: "52px" }}
                mb={{ sm: "16px", md: "0px" }}
              >
                {/* SALDO ACTUAL */}
                <Card>
                  <CardBody>
                    <Flex
                      flexDirection="row"
                      align="center"
                      justify="center"
                      w="100%"
                    >
                      <Stat me="auto">
                        <StatLabel
                          fontSize="sm"
                          color="gray.400"
                          fontWeight="bold"
                          pb="2px"
                        >
                          Saldo Actual:
                        </StatLabel>
                        <Flex>
                          <StatNumber fontSize="lg" color="#fff">
                            $5,500
                          </StatNumber>
                          <StatHelpText
                            alignSelf="flex-end"
                            justifySelf="flex-end"
                            m="0px"
                            color="green.400"
                            fontWeight="bold"
                            ps="3px"
                            fontSize="md"
                          >
                            +55%
                          </StatHelpText>
                        </Flex>
                      </Stat>
                      <IconBox as="box" h={"40px"} w={"40px"} bg="brand.200">
                        <WalletIcon h={"24px"} w={"24px"} color="#fff" />
                      </IconBox>
                    </Flex>
                  </CardBody>
                </Card>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Grid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
        maxW={{ sm: "350px", md: "100%" }}
        gap="24px"
        mb="24px"
      ></Grid>
    </Flex>
  );
}
