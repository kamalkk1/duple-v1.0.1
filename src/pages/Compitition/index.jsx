import React from "react";

import { Button, Img, Line, List, Text } from "components";

const CompititionPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="h-[885px] md:h-[970px] mx-auto w-full">
            <div className="bg-black-900 flex md:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto pb-[90px] md:px-10 sm:px-5 px-[90px] w-full">
              <Img
                className="h-[45px] md:h-auto md:ml-[0] ml-[100px] md:mt-0 mt-5 object-cover"
                src="images/img_headlogo3.png"
                alt="headlogoThree"
              />
              <div className="h-[789px] md:h-[795px] mb-1.5 relative w-[65%] md:w-full">
                <Img
                  className="h-[789px] m-auto object-cover w-full"
                  src="images/img_wallpapersden1.png"
                  alt="wallpapersdenOne"
                />
                <div className="absolute flex flex-row items-start justify-center right-[16%] top-[4%] w-[10%]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <a
                    href="javascript:"
                    className="ml-[2px] text-blue_gray-100 text-sm"
                  >
                    <Text>Sign in</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-[172px] left-[200px] md:left-[10%] w-full md:w-[677px] h-[485px] md:h-auto">
  <Button
    className="cursor-pointer font-semibold leading-[normal] md:min-w-[122px] rounded-[16px] text-[15px] text-center"
    color="red_A700_01"
    size="xs"
  >
    Upcoming
  </Button>
  <div className="flex flex-col items-start justify-start md:mt-0 mt-4 w-full">
    <Text
      className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
      size="txtInterMedium30WhiteA700"
    >
      <span className="text-white-A700 font-inter text-left font-semibold">
        THE REEL
      </span>
      <span className="text-white-A700 font-inter text-left font-medium">
        STAR
      </span>
    </Text>
    <div className="flex flex-row items-center justify-start mt-1 w-full md:w-[55%]">
      <Img
        className="h-[13px] w-[13px]"
        src="images/img_settings_gray_400.svg"
        alt="settings_Two"
      />
      <div className="h-5 md:h-[19px] relative w-[95%] sm:w-full flex items-center">
        <span
          className="font-medium leading-[normal] sm:pr-5 text-[15px] text-gray-400 text-left"
        >
          Category: Acting
        </span>
        <span
          className="font-medium leading-[normal] sm:pr-5 text-[15px] text-gray-400 text-left"
        >
          Current Round: Audition
        </span>
      </div>
    </div>
    <Line className="bg-white-A700_70 h-px mt-2 w-[20%]" />
    <Text
      className="mt-4 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
      size="txtInterLight30"
    >
      Act to express your
    </Text>
    <Text
      className="sm:text-[35px] md:text-[41px] text-[40px] text-white-A700 uppercase mt-1"
      size="txtInterSemiBold45"
    >
      emotions, speech, <br />dialogue and expressions.
    </Text>
    <Button
      className="capitalize cursor-pointer font-semibold min-w-[242px] mt-4 text-center text-xl"
      shape="round"
    >
      Click to Watch
    </Button>
  </div>
  <div className="h-[27px] md:h-[57px] sm:h-[87px] mt-4 md:mt-[30px] relative w-full md:w-[65%]">
    <Img
      className="h-6 ml-auto mr-[197px] w-6"
      src="images/img_calendar_gray_400.svg"
      alt="calendar_One"
    />
    <div className="absolute flex sm:flex-col flex-row gap-1.5 h-full inset-[0] items-start m-auto w-full">
      <Img
        className="h-6 w-6"
        src="images/img_forward.svg"
        alt="forward"
      />
      <div className="flex sm:flex-1 flex-row items-center w-[94%] sm:w-full">
        <Text
          className="text-[22px] text-gray-400 sm:text-lg md:text-xl"
          size="txtInterMedium22"
        >
          28 Participants
        </Text>
        <Text
          className="text-[22px] text-gray-400 sm:text-lg md:text-xl"
          size="txtInterMedium22"
        >
          20th August 2021
        </Text>
      </div>
    </div>
  </div>
</div>
</div>
<div className="bg-white-A700 flex flex-col mt-[-120px] items-center justify-start mx-auto pb-[40px] md:pl-10 sm:pl-5 pl-[50px] rounded-[20px] w-50% md:w-[72%] z-[1]">
  <div className="flex md:flex-col flex-row md:gap-3 items-end justify-start w-50%">
    <div className="flex sm:flex-1 flex-col h-[520px] sm:h-auto items-center justify-start md:mt-0 mt-[10px] w-[520px] sm:w-full">
      <Img
        className="h-[520px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[520px] sm:w-full"
        src="images/img_image2.png"
        alt="imageTwo"
      />
    </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[50px] md:mt-0 mt-10 w-[44%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[39%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                    size="txtInterMedium30"
                  >
                    <span className="text-black-900_01 font-inter text-left font-bold">
                      THE REEL  <span className="text-black-900_01 font-inter text-left font-medium">
                      {" "} STAR
                    </span>
                    </span>
                 
                  </Text>
                  <div className="flex flex-row items-start justify-start w-[68%] md:w-full">
                    <Img
                      className="h-3.5 mt-0"
                      src="images/img_settings_gray_700.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="text-base text-gray-700"
                      size="txtInterMedium16"
                    >
                      <span className="text-gray-700 font-inter text-left font-medium">
                        Category:
                      </span>
                      <span className="text-gray-700 font-inter text-left font-semibold">
                        {" "}
                      </span>
                      <span className="text-black-900_01 font-inter text-left font-medium">
                        Dance
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mt-2 w-[53%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="ml-2.5 text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    66 Participants
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start ml-[22px] w-[47%]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="text-base text-gray-700"
                      size="txtInterRegular16"
                    >
                      18th June 2021
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px md:ml-[0] ml-[3px] mt-[21px] w-[87%]" />
                <Text
                  className="capitalize leading-[40.00px] mt-6 sm:text-2xl md:text-[26px] text-[28px] text-black-900_01"
                  size="txtInterLight28"
                >
                  <span className="text-black-900_01 font-inter text-left font-light">
                    <>
                      A style of movement which indicates
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-semibold">
                    your expression through moves!
                  </span>
                </Text>
                <List
                  className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-3 ml-2 md:ml-[0] mt-[17px] w-[90%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                        <div className="bg-gray-400_01 md:h-[109px] h-[116px] pt-[7px] px-[7px] relative rounded-tl-[20px] rounded-tr-[20px] w-full">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[8%] w-[78%]">
                            <Img
                              className="h-[109px] md:h-auto object-cover w-full"
                              src="images/img_untitled41.png"
                              alt="untitledFortyOne"
                            />
                          </div>
                          <Img
                            className="absolute h-[41px] right-[6%] top-[9%]"
                            src="images/img_play.svg"
                            alt="play"
                          />
                        </div>
                        <Text
                          className="capitalize mt-[9px] text-black-900_01 text-sm"
                          size="txtInterMedium14Black90001"
                        >
                          Monalisha Basistha
                        </Text>
                        <div className="flex flex-row items-start justify-center mt-1 w-[56%] md:w-full">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Text
                            className="capitalize ml-0.5 text-gray-700 text-xs"
                            size="txtInterRegular12"
                          >
                            Assam, India
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start pb-3.5 rounded-[20px] shadow-bs w-full">
                        <div className="bg-gray-400_01 flex flex-col items-center justify-start pt-[7px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                          <div className="h-[109px] relative w-full">
                            <Img
                              className="h-[109px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                              src="images/img_untitled51.png"
                              alt="untitledFiftyOne"
                            />
                            <Img
                              className="absolute h-[41px] right-[6%] top-[3%]"
                              src="images/img_clock.svg"
                              alt="clock"
                            />
                          </div>
                        </div>
                        <Text
                          className="capitalize mt-2.5 text-black-900_01 text-center text-sm"
                          size="txtInterMedium14Black90001"
                        >
                          Mayuri Muskan
                        </Text>
                        <div className="flex flex-row items-center justify-center mt-0.5 w-[24%] md:w-full">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Text
                            className="capitalize ml-0.5 text-gray-700 text-xs"
                            size="txtInterRegular12"
                          >
                            N/a
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                      <div className="bg-gray-400_01 md:h-[111px] h-[116px] pt-[5px] px-[5px] relative rounded-tl-[20px] rounded-tr-[20px] w-full">
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[87%]">
                          <Img
                            className="h-[111px] md:h-auto object-cover w-full"
                            src="images/img_untitled61.png"
                            alt="untitledSixtyOne"
                          />
                        </div>
                        <Img
                          className="absolute h-[39px] right-[6%] top-[9%]"
                          src="images/img_clock_red_900_01.svg"
                          alt="clock"
                        />
                      </div>
                      <Text
                        className="capitalize mt-[9px] text-black-900_01 text-sm"
                        size="txtInterMedium14Black90001"
                      >
                        bhosale mahi
                      </Text>
                      <div className="flex flex-row items-start justify-start mt-1 w-[77%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="capitalize ml-0.5 text-gray-700 text-xs"
                          size="txtInterRegular12"
                        >
                          Maharashtra, India
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="capitalize cursor-pointer font-semibold min-w-[242px] ml-2 md:ml-[0] mt-[9px] text-center text-xl"
                  shape="round"
                >
                  Click to Watch
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start mb-[417px] md:ml-[0] ml-[26px] p-8 sm:px-5 w-[153px]"
                style={{ backgroundImage: "url('images/img_group330.svg')" }}
              >
                <Text
                  className="mb-[19px] rotate-[45deg] text-center text-sm text-white-A700"
                  size="txtInterSemiBold14"
                >
                  Completed
                </Text>
              </div>
            </div>
          </div>
        
        </div>
        <div className="bg-white-A700 md:h-[413px] h-[620px] max-w-[1380px] mt-[50px] mx-auto md:px-5 relative rounded-[20px] w-full">
          <div className="absolute bottom-[0] h-[570px] inset-x-[0] mx-auto w-full">
            <div className="flex flex-col h-[520px] sm:h-auto items-center justify-start mb-[-157px] ml-auto mr-[50px] w-[520px] z-[1]">
              <Img
                className="h-[520px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[520px] sm:w-full"
                src="images/img_image2_520x520.png"
                alt="imageTwo_One"
              />
            </div>
            <Img
              className="h-[207px] mt-auto mx-auto"
              src="images/img_maskgroup.svg"
              alt="maskgroup"
            />
          </div>
          <div className="absolute flex flex-col gap-[22px] items-start justify-start left-[4%] top-[10%] w-[43%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtInterMedium30"
                >
                  <span className="text-black-900_01 font-inter text-left font-bold">
                    THE REE
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-bold">
                    L
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-normal">
                    STAR
                  </span>
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Img
                    className="h-3.5 mt-1 w-3.5"
                    src="images/img_settings_gray_700.svg"
                    alt="settings_Three"
                  />
                  <Text
                    className="text-base text-gray-700"
                    size="txtInterMedium16"
                  >
                    <span className="text-gray-700 font-inter text-left font-medium">
                      Category:
                    </span>
                    <span className="text-gray-700 font-inter text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-black-900_01 font-inter text-left font-medium">
                      Fashion
                    </span>
                  </Text>
                  <span
                    className="font-medium leading-[normal] text-[15px] text-gray-400 text-left"
                   
                  >Current Round: Audition</span>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start mt-2.5 w-[52%] md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_user.svg"
                  alt="user_One"
                />
                <Text
                  className="ml-2.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  32 Participants
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start ml-[22px] w-[46%]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_calendar.svg"
                    alt="calendar_Two"
                  />
                  <Text
                    className="text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    21st June 2021
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400 h-px md:ml-[0] ml-[3px] mt-[21px] w-[87%]" />
              <Text
                className="capitalize leading-[40.00px] mt-6 sm:text-2xl md:text-[26px] text-[28px] text-black-900_01"
                size="txtInterLight28"
              >
                <span className="text-black-900_01 font-inter text-left font-light">
                  <>
                    Accessorize your outfits and dazzle
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-inter text-left font-semibold">
                  this competition with style.
                </span>
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-semibold min-w-[242px] text-center text-xl"
              shape="round"
            >
              Click to Watch
            </Button>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start p-[34px] sm:px-5 right-[0] top-[0] w-[153px]"
            style={{ backgroundImage: "url('images/img_group330.svg')" }}
          >
            <Text
              className="mb-5 rotate-[45deg] text-center text-sm text-white-A700"
              size="txtInterSemiBold14"
            >
              Upcoming
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1380px] mt-10 mx-auto pb-[50px] pl-[50px] md:px-5 rounded-[20px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <div className="flex sm:flex-1 flex-col h-[520px] sm:h-auto items-center justify-start md:mt-0 mt-[50px] w-[520px] sm:w-full">
              <Img
                className="h-[520px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[520px] sm:w-full"
                src="images/img_image2_1.png"
                alt="imageTwo_Two"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[50px] md:mt-0 mt-16 w-[44%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[59%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                  size="txtInterBold30"
                >
                  <span className="text-black-900_01 font-inter text-left font-bold">
                    THE VOICE{" "}
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-normal">
                    SENSATION
                  </span>
                </Text>
                <div className="flex flex-row gap-2.5 items-start justify-start w-[48%] md:w-full">
                  <Img
                    className="h-3.5 mt-0.5 w-3.5"
                    src="images/img_settings_gray_700.svg"
                    alt="settings_Four"
                  />
                  <Text
                    className="text-base text-gray-700"
                    size="txtInterMedium16"
                  >
                    <span className="text-gray-700 font-inter text-left font-medium">
                      Category:
                    </span>
                    <span className="text-gray-700 font-inter text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-black-900_01 font-inter text-left font-medium">
                      Singing
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start mt-2.5 w-[54%] md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_user.svg"
                  alt="user_Two"
                />
                <Text
                  className="ml-2.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  18 Participants
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start ml-[25px] w-[48%]">
                  <Img
                    className="h-4 w-4"
                    src="images/img_calendar.svg"
                    alt="calendar_Three"
                  />
                  <Text
                    className="text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    19th March 2021
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400 h-px md:ml-[0] ml-[3px] mt-[21px] w-[87%]" />
              <Text
                className="capitalize leading-[40.00px] mt-6 sm:text-2xl md:text-[26px] text-[28px] text-black-900_01"
                size="txtInterLight28"
              >
                <span className="text-black-900_01 font-inter text-left font-light">
                  <>
                    A style of movement which indicates
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-inter text-left font-semibold">
                  your expression through moves!
                </span>
              </Text>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-3 ml-2 md:ml-[0] mt-[17px] w-[90%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                    <div className="bg-gray-400_01 flex flex-col items-center justify-start rounded-tl-[20px] rounded-tr-[20px] w-full">
                      <div className="h-[115px] relative w-full">
                        <Img
                          className="h-[115px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                          src="images/img_de1.png"
                          alt="de1"
                        />
                        <Img
                          className="absolute h-[41px] right-[6%] rounded-tl-[20px] rounded-tr-[20px] top-[8%]"
                          src="images/img_play_lime_900.svg"
                          alt="play"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                      <Text
                        className="capitalize text-black-900_01 text-sm"
                        size="txtInterMedium14Black90001"
                      >
                        Dhitasmita De
                      </Text>
                      <div className="flex flex-row items-start justify-evenly mt-1 w-[94%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="capitalize text-gray-700 text-xs"
                          size="txtInterRegular12"
                        >
                          Assam, India
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                      <div className="bg-gray-400_01 flex flex-col items-center justify-start px-2 rounded-tl-[20px] rounded-tr-[20px] w-full">
                        <div className="h-[116px] relative w-[99%]">
                          <Img
                            className="absolute h-[41px] right-[0] rounded-tl-[20px] rounded-tr-[20px] top-[9%]"
                            src="images/img_clock_gray_700_01.svg"
                            alt="clock"
                          />
                          <Img
                            className="absolute h-[116px] inset-[0] justify-center m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-[98%]"
                            src="images/img_mohit1.png"
                            alt="mohitOne"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                        <Text
                          className="capitalize text-black-900_01 text-center text-sm"
                          size="txtInterMedium14Black90001"
                        >
                          Mohit Parashar
                        </Text>
                        <div className="flex flex-row items-start justify-evenly mt-1 w-full">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Text
                            className="capitalize text-gray-700 text-xs"
                            size="txtInterRegular12"
                          >
                            Rajasthan, India
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                      <div className="bg-gray-400_01 md:h-[114px] h-[116px] pt-0.5 px-0.5 relative rounded-tl-[20px] rounded-tr-[20px] w-full">
                        <Img
                          className="absolute h-[39px] right-[6%] top-[9%]"
                          src="images/img_clock_red_900_01_39x27.svg"
                          alt="clock"
                        />
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[2%] my-auto w-[88%]">
                          <Img
                            className="h-[114px] md:h-auto object-cover w-full"
                            src="images/img_sara1.png"
                            alt="saraOne"
                          />
                        </div>
                      </div>
                      <Text
                        className="capitalize mt-[9px] text-black-900_01 text-sm"
                        size="txtInterMedium14Black90001"
                      >
                        Sara Hashmi
                      </Text>
                      <div className="flex flex-row items-start justify-center mt-1 w-[69%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="capitalize ml-0.5 text-gray-700 text-xs"
                          size="txtInterRegular12"
                        >
                          Punjab, Pakistan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="capitalize cursor-pointer font-semibold min-w-[242px] ml-2 md:ml-[0] mt-[9px] text-center text-xl"
                shape="round"
              >
                Click to Watch
              </Button>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start mb-[417px] md:ml-[0] ml-[26px] p-8 sm:px-5 w-[153px]"
              style={{ backgroundImage: "url('images/img_group330.svg')" }}
            >
              <Text
                className="mb-[19px] rotate-[45deg] text-center text-sm text-white-A700"
                size="txtInterSemiBold14"
              >
                Completed
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[1001px] mt-10 md:px-5 relative w-full ">
          <div className="bg-white-A700 flex flex-col items-center justify-start mb-[-126px] mx-auto pb-[50px] md:pl-10 sm:pl-5 pl-[50px] rounded-[20px] w-[72%] z-[1]">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-16 w-[44%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[3px] w-[34%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900_01"
                    size="txtInterBold30"
                  >
                    <span className="text-black-900_01 font-inter text-left font-bold">
                      <>LET&#39;S </>
                    </span>
                    <span className="text-black-900_01 font-inter text-left font-normal">
                      DANCE
                    </span>
                  </Text>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-4/5 md:w-full">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_settings_gray_700.svg"
                      alt="settings_Five"
                    />
                    <Text
                      className="text-base text-gray-700"
                      size="txtInterMedium16"
                    >
                      <span className="text-gray-700 font-inter text-left font-medium">
                        Category:
                      </span>
                      <span className="text-gray-700 font-inter text-left font-semibold">
                        {" "}
                      </span>
                      <span className="text-black-900_01 font-inter text-left font-medium">
                        Dance
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mt-2.5 w-[52%] md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_user.svg"
                    alt="user_Three"
                  />
                  <Text
                    className="ml-2.5 text-base text-gray-700"
                    size="txtInterRegular16"
                  >
                    16 Participants
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start ml-6 w-[46%]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_calendar.svg"
                      alt="calendar_Four"
                    />
                    <Text
                      className="text-base text-gray-700"
                      size="txtInterRegular16"
                    >
                      08th Feb 2021
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-400 h-px md:ml-[0] ml-[3px] mt-[21px] w-[87%]" />
                <Text
                  className="capitalize leading-[40.00px] mt-6 sm:text-2xl md:text-[26px] text-[28px] text-black-900_01"
                  size="txtInterLight28"
                >
                  <span className="text-black-900_01 font-inter text-left font-light">
                    <>
                      Signature moves, beautiful expressions
                      <br />
                    </>
                  </span>
                  <span className="text-black-900_01 font-inter text-left font-semibold">
                    and rhythmic movements.
                  </span>
                </Text>
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[17px] w-[91%] md:w-full">
                  <div className="h-44 md:h-[173px] relative w-[32%] sm:w-full">
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[97%]">
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-[13px] rounded-[20px] shadow-bs w-full">
                        <Text
                          className="capitalize mt-28 text-black-900_01 text-center text-sm"
                          size="txtInterMedium14Black90001"
                        >
                          Aarya Shinde
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-[3px] w-[92%] md:w-full">
                          <Img
                            className="h-3.5 w-3.5"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                          <Text
                            className="capitalize ml-0.5 text-gray-700 text-xs"
                            size="txtInterRegular12"
                          >
                            Maharashtra, India
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-[116px] inset-x-[0] mx-auto top-[0] w-[97%]">
                      <Img
                        className="h-[116px] m-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
                        src="images/img_image3.png"
                        alt="imageThree"
                      />
                      <Img
                        className="absolute h-[41px] right-[6%] rounded-tl-[20px] rounded-tr-[20px] top-[9%]"
                        src="images/img_play_lime_900_41x28.svg"
                        alt="play"
                      />
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-5 grid grid-cols-2 sm:mt-0 mt-2.5 w-[65%] sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                          <div className="bg-gray-400_01 flex flex-col items-center justify-start pt-[5px] px-[5px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                            <div className="h-[106px] md:h-[110px] mt-[5px] relative w-[97%]">
                              <Img
                                className="absolute h-[41px] right-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0]"
                                src="images/img_clock_gray_700_01_41x28.svg"
                                alt="clock"
                              />
                              <Img
                                className="absolute h-[105px] inset-y-[0] left-[0] my-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-[94%]"
                                src="images/img_vinay1.png"
                                alt="vinayOne"
                              />
                            </div>
                          </div>
                          <Text
                            className="capitalize mt-2.5 text-black-900_01 text-center text-sm"
                            size="txtInterMedium14Black90001"
                          >
                            Vinay Gome
                          </Text>
                          <div className="flex flex-row items-start justify-start mt-[3px] w-[91%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                            <Text
                              className="capitalize ml-0.5 text-gray-700 text-xs"
                              size="txtInterRegular12"
                            >
                              Madhya Pradesh, India
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[13px] rounded-[20px] shadow-bs w-full">
                          <div className="bg-gray-400_01 md:h-[113px] h-[116px] pt-[3px] px-[3px] relative rounded-tl-[20px] rounded-tr-[20px] w-full">
                            <Img
                              className="absolute h-[39px] right-[6%] top-[9%]"
                              src="images/img_clock_39x27.svg"
                              alt="clock"
                            />
                            <Img
                              className="absolute h-[113px] inset-y-[0] left-[9%] my-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-[77%]"
                              src="images/img_siddhi1.png"
                              alt="siddhiOne"
                            />
                          </div>
                          <Text
                            className="capitalize mt-[9px] text-black-900_01 text-center text-sm"
                            size="txtInterMedium14Black90001"
                          >
                            Siddhi Mote
                          </Text>
                          <div className="flex flex-row items-start justify-start mt-1 w-[77%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_linkedin.svg"
                              alt="linkedin"
                            />
                            <Text
                              className="capitalize ml-0.5 text-gray-700 text-xs"
                              size="txtInterRegular12"
                            >
                              Maharashtra, India
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold min-w-[242px] ml-2 md:ml-[0] mt-[9px] text-center text-xl"
                  shape="round"
                >
                  Click to Watch
                </Button>
              </div>
              <div className="md:h-[520px] h-[570px] relative w-[570px] sm:w-full">
                <div className="absolute bottom-[0] flex flex-col h-[520px] sm:h-auto items-center justify-start left-[0] w-[520px]">
                  <Img
                    className="h-[520px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[520px] sm:w-full"
                    src="images/img_image2_2.png"
                    alt="imageTwo_Three"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start p-8 sm:px-5 right-[0] top-[0] w-[153px]"
                  style={{ backgroundImage: "url('images/img_group330.svg')" }}
                >
                  <Text
                    className="mb-[19px] rotate-[45deg] text-center text-sm text-white-A700"
                    size="txtInterSemiBold14"
                  >
                    Completed
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-col items-center justify-end mt-auto mx-auto p-[76px] md:px-10 sm:px-5 w-full">
            <Img
              className="h-[60px] md:h-auto mt-[129px] object-cover w-[12%] sm:w-full"
              src="images/img_headlogo3.png"
              alt="headlogoFour"
            />
            <div className="flex flex-col gap-[26px] items-center justify-start mt-10 w-[79%] md:w-full">
              <Line className="bg-white-A700_38 h-px w-full" />
              <Text
                className="capitalize text-[19px] text-gray-700_02"
                size="txtInterMedium19"
              >
                Terms of Use Privacy Policy Disclaimer
              </Text>
              <Line className="bg-white-A700_38 h-px w-full" />
            </div>
            <Text
              className="capitalize mt-7 text-base text-center text-gray-700_02"
              size="txtInterMedium16Gray70002"
            >
              © 2023 Reelage. All Rights Reserved
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompititionPage;
